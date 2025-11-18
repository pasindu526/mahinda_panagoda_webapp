import React, { useState, useCallback, useEffect } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  StepConnector,
  stepConnectorClasses,
} from "@mui/material";
import ConfirmDetails from "./ConfirmDetails";
import SelectParlour from "./SelectParlour";
import PaymentOptions from "./PaymentOptions";
import Payment from "./Payment";

const steps = [
  "Confirm Details",
  "Select a Parlour",
  "Payment Option",
  "Payment",
];

type Package = {
  price: string;
  description?: string;
  mainImg?: string;
  images?: string[];
  category?: string;
  details?: { text: string; subItems?: string[] }[];
};

interface CheckoutStepperProps {
  selectedPackage?: Package | null;
  visibleFields?: string[];
  fieldLabels?: Record<string, string>;
  isPreArrangement?: boolean;
}

const CheckoutStepper: React.FC<CheckoutStepperProps> = ({
  selectedPackage,
  visibleFields,
  fieldLabels,
  isPreArrangement,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeStep, setActiveStep] = useState(0);
  const [triggerValidation, setTriggerValidation] = useState(false);
  const [isStepValid, setIsStepValid] = useState<boolean | null>(null);
  const [checkoutData, setCheckoutData] = useState<Record<string, string>>({});
  const [paymentDone, setPaymentDone] = useState(false);

  const handleNext = () => {
    window.scrollTo(0, 0); // scroll to top on step change

    // If on the final step and payment is already done
    if (activeStep === steps.length - 1) {
      if (paymentDone) {
        setActiveStep((prev) => prev + 1);
        // clear any lingering validation triggers
        setTriggerValidation(false);
        setIsStepValid(null);
        return;
      }
      return;
    }

    // case for pre-arrangement purchases
    if (isPreArrangement && activeStep === 1) {
      setActiveStep((prev) => prev + 1);
      return;
    }

    // Trigger validation on the current step for non-final steps
    setTriggerValidation(true);
  };
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleReset = () => {
    setActiveStep(0);
    setTriggerValidation(false);
    setIsStepValid(null);
    setPaymentDone(false);
  };

  // reset payment flag whenever user navigates away from payment step
  React.useEffect(() => {
    if (activeStep !== steps.length - 1) setPaymentDone(false);
  }, [activeStep]);

  // Handle data coming from child steps
  const handleChildData = useCallback((data: Record<string, string>) => {
    setCheckoutData((prev) => {
      const merged = { ...prev, ...data };
      // shallow compare: if nothing changed, return previous state to avoid rerenders
      const prevKeys = Object.keys(prev);
      const mergedKeys = Object.keys(merged);
      if (
        prevKeys.length === mergedKeys.length &&
        mergedKeys.every((k) => String(prev[k]) === String(merged[k]))
      ) {
        return prev;
      }
      return merged;
    });
  }, []);

  // Handle validation result from steps
  React.useEffect(() => {
    if (!triggerValidation) return;
    if (isStepValid === null) return; // waiting for step

    if (isStepValid) {
      setActiveStep((prev) => prev + 1);
    }

    // Clear trigger
    setTriggerValidation(false);
    // Reset validation result to null.
    setIsStepValid(null);
  }, [triggerValidation, isStepValid]);

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <ConfirmDetails
            selectedPackage={selectedPackage}
            triggerValidation={triggerValidation}
            onValidationChange={(valid: boolean) => setIsStepValid(valid)}
            onDataChange={handleChildData}
          />
        );
      case 1:
        return (
          <SelectParlour
            selectedPackage={selectedPackage}
            triggerValidation={triggerValidation}
            onValidationChange={(valid: boolean) => setIsStepValid(valid)}
            onDataChange={handleChildData}
            isPreArrangement={isPreArrangement}
          />
        );
      case 2:
        return (
          <PaymentOptions
            triggerValidation={triggerValidation}
            onValidationChange={(valid: boolean) => setIsStepValid(valid)}
            selectedPackage={selectedPackage}
            onDataChange={handleChildData}
          />
        );
      case 3:
        return (
          <Payment
            onDataChange={handleChildData}
            onPaid={() => setPaymentDone(true)}
          />
        );
      default:
        return;
    }
  };

  const formatKey = (key: string) => {
    const words = key
      .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
      .replace(/[_-]/g, " ")
      .split(" ")
      .filter(Boolean)
      .map((w) => w[0].toUpperCase() + w.slice(1));
    return words.join(" ");
  };

  return (
    <div className="w-full flex flex-col gap-6 lg:gap-10">
      <Box sx={{ width: "100%", mx: "auto" }}>
        {/* Stepper navigation */}
        <Stepper
          className="mx-auto w-full md:w-4/5"
          activeStep={activeStep}
          alternativeLabel
          connector={
            <StepConnector
              sx={{
                [`&.${stepConnectorClasses.alternativeLabel}`]: {
                  top: { md: 22 },
                },
                [`& .${stepConnectorClasses.line}`]: {
                  width: "80%",
                  height: { xs: 2, md: 4 },
                  border: 0,
                  backgroundColor: "#ccc",
                  borderRadius: 1,
                  mx: "auto",
                },
                [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]:
                  {
                    backgroundColor: "#005B32",
                  },
                [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]:
                  {
                    backgroundColor: "#005B32",
                  },
              }}
            />
          }
        >
          {steps.map((label) => (
            <Step
              key={label}
              sx={{
                "& .MuiStepLabel-root .Mui-completed": { color: "#005B32" },
                "& .MuiStepLabel-root .Mui-active": { color: "#005B32" },
                "& .MuiStepIcon-root": { fontSize: { xs: "2rem", md: "3rem" } },
                "& .MuiStepLabel-label": { fontSize: { md: "1rem" } },
              }}
            >
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Step content area */}
        <Box
          sx={{
            mt: 4,
            textAlign: "center",
            width: "100%",
            bgcolor: "#f9f9f9",
            mx: "auto",
          }}
        >
          {activeStep === steps.length ? (
            // summary details
            <div className="bg-white flex flex-col items-center md:items-start mt-6 md:mt-14 lg:mt-16">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-belda mb-4 md:mb-6">
                Checkout completed...
              </h1>
              <div className="w-full text-left mt-4">
                <h3 className="font-medium mb-4 lg:text-lg">Summary</h3>
                {/* Collect non-empty fields, exclude sensitive/internal keys, and include package info */}
                {(() => {
                  const keys =
                    visibleFields && visibleFields.length > 0
                      ? visibleFields
                      : Object.keys(checkoutData);

                  // keys to exclude from display (stripe tokens etc.)
                  const excluded = new Set([
                    "stripeToken",
                    "cardToken",
                    "stripe_token",
                    "stripe_token_id",
                  ]);

                  // filter out keys with empty/null/undefined values and exclude sensitive keys
                  const filtered = keys.filter((k) => {
                    if (excluded.has(k)) return false;
                    const v = checkoutData[k];
                    return (
                      v !== undefined && v !== null && String(v).trim() !== ""
                    );
                  });

                  // Prepend package info when available
                  const fetchedData: { label?: string; value: string }[] = [];
                  if (selectedPackage) {
                    const pkg = selectedPackage as Package;
                    if (pkg.category)
                      fetchedData.push({
                        label: "Package",
                        value: String(pkg.category),
                      });
                    if (pkg.price)
                      fetchedData.push({
                        label: "Price",
                        value: String(pkg.price),
                      });
                  }

                  if (filtered.length === 0 && fetchedData.length === 0) {
                    return (
                      <p className="text-gray-500">
                        No checkout data available.
                      </p>
                    );
                  }

                  // Render data
                  return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-12 text-sm">
                      {fetchedData.map((fData, i) => (
                        <div
                          key={`pre-${i}`}
                          className="mb-0 p-2 bg-gray-50 rounded-lg flex gap-2 items-start justify-start"
                        >
                          {fData.label ? (
                            <div className="font-medium text-sm text-ternary">
                              {fData.label}:
                            </div>
                          ) : null}
                          <div className="text-sm break-words">
                            {fData.value}
                          </div>
                        </div>
                      ))}

                      {filtered.map((k) => {
                        const label =
                          fieldLabels && fieldLabels[k]
                            ? fieldLabels[k]
                            : formatKey(k);
                        return (
                          <div
                            key={k}
                            className="mb-0 p-2 bg-gray-50 rounded-lg flex gap-2 items-center justify-start"
                          >
                            <div className="font-medium text-sm text-ternary">
                              {label}:
                            </div>
                            <div className="text-sm break-words">
                              {checkoutData[k]}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}
              </div>
              <Button
                onClick={() => {
                  handleReset();
                  setCheckoutData({});
                }}
                variant="contained"
                className="mt-10 bg-primary hover:bg-primary/90 text-ternary rounded-lg shadow-none px-5 h-11 font-normal md:h-12 hover:shadow-none text-base capitalize"
              >
                Start Over
              </Button>
            </div>
          ) : (
            // step content
            <div className="mt-6 md:mt-14 lg:mt-16">
              {renderStepContent(activeStep)}
            </div>
          )}
        </Box>

        {/* Navigation buttons - hide on completion screen */}
        {activeStep !== steps.length && (
          <Box className="items-center flex mx-auto justify-center md:justify-start mt-8 gap-2">
            <Button
              sx={{
                "&.Mui-disabled": {
                  pointerEvents: "unset",
                  cursor: "not-allowed",
                },
              }}
              disabled={activeStep === 0}
              onClick={handleBack}
              className="border-2 text-ternary border-ternary disabled:text-gray-400/70 disabled:border-gray-400/60 hover:bg-gray-50 rounded-lg shadow-none px-5 h-11 font-normal md:h-12 hover:shadow-none text-base capitalize"
            >
              Back
            </Button>
            <Button
              sx={{
                "&.Mui-disabled": {
                  pointerEvents: "unset",
                  cursor: "not-allowed",
                },
              }}
              variant="contained"
              onClick={handleNext}
              className="bg-primary hover:bg-primary/90 disabled:opacity-60 text-ternary rounded-lg shadow-none px-5 h-11 font-normal md:h-12 hover:shadow-none text-base capitalize"
              disabled={activeStep === steps.length - 1 && !paymentDone}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next Step"}
            </Button>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default CheckoutStepper;
