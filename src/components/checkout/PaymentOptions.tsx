import React, { useState, useEffect } from "react";

import advancePayment from "@/assets/icon/advancePayment.svg";
import fullPayment from "@/assets/icon/step-3.svg";
import { Input } from "../ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

interface StepProps {
  triggerValidation?: boolean;
  onValidationChange?: (isValid: boolean) => void;
  onDataChange?: (data: Record<string, string>) => void;
  selectedPackage?: { price?: string | number } | null;
}

const paymentOptions = [
  {
    img: advancePayment,
    method: "Advance Payment",
  },
  {
    img: fullPayment,
    method: "Full Payment",
  },
];

const PaymentOptions: React.FC<StepProps> = ({
  triggerValidation,
  onValidationChange,
  onDataChange,
  selectedPackage,
}) => {
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [bottomError, setBottomError] = useState<string>("");
  const [installmentPeriod, setInstallmentPeriod] = useState<string>("");

  // Trigger validation if needed
  useEffect(() => {
    if (triggerValidation && onValidationChange) {
      // require a payment method
      if (!selectedMethod) {
        setBottomError("Please select a payment method before clicking Next.");
        onValidationChange(false);
        return;
      }

      // if advance payment, require amount and installmentPeriod
      if (selectedMethod === "Advance Payment") {
        if (!amount || !installmentPeriod) {
          setBottomError(
            "Please enter amount and select an installment period for Advance Payment."
          );
          onValidationChange(false);
          return;
        }
      }

      // valid
      setBottomError("");
      onValidationChange(true);
    }
  }, [
    triggerValidation,
    onValidationChange,
    selectedMethod,
    amount,
    installmentPeriod,
  ]);

  // Notify parent about selected method and installmentPeriod
  useEffect(() => {
    if (onDataChange) {
      onDataChange({
        paymentMethod: selectedMethod,
        installmentPeriod,
        amount,
      });
    }
  }, [selectedMethod, installmentPeriod, amount, onDataChange]);

  return (
    <div className="bg-white">
      <h1 className="text-center md:text-start text-xl md:text-2xl lg:text-3xl font-belda mb-4 md:mb-6">
        Select a Payment Option
      </h1>
      <div className="flex gap-6 md:gap-16 lg:gap-20">
        {paymentOptions.map((option) => (
          <div
            key={option.method}
            className={`flex flex-col gap-2 md:gap-4 items-center justify-center w-full p-6 border-2 rounded-lg cursor-pointer 
              ${
                selectedMethod === option.method
                  ? "border-gray-200 bg-[#f8f8f8]"
                  : "border-gray-200"
              }`}
            onClick={() => {
              setSelectedMethod(option.method);
              setBottomError("");
            }}
          >
            <img src={option.img} />
            <p className="text-base md:text-lg lg:text-xl">{option.method}</p>
          </div>
        ))}
      </div>

      {/* Conditional Rendering */}
      {selectedMethod === "Advance Payment" && (
        <div className="flex flex-col mt-6">
          <p className="text-start text-lg md:text-xl lg:text-[22px]">
            <span className="font-medium">Selected Method: </span>Advance
            Payment
          </p>
          {/* Advance Payment section content here */}
          <div className="flex flex-col lg:flex-row mt-6 gap-6 lg:gap-40 items-start justify-start mb-4">
            <div className="flex justify-start items-center gap-2">
              <p className="text-sm md:text-base text-left">
                Enter the payment amount:{" "}
              </p>
              <Input
                className="w-40 border-gray-600 focus:ring-0 focus:ring-white text-sm"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setBottomError("");
                }}
                required
              />
            </div>
            <div className="flex justify-start items-center gap-2">
              <p className="text-sm md:text-base text-left">
                Select the payment time period of installments:{" "}
              </p>
              <Select
                onValueChange={(val) => {
                  setInstallmentPeriod(val);
                  setBottomError("");
                }}
                value={installmentPeriod}
                required
              >
                <SelectTrigger className="w-44 border-gray-600">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="3-months">3 months</SelectItem>
                  <SelectItem value="6-months">6 months</SelectItem>
                  <SelectItem value="12-months">12 months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}

      {/* Bottom inline error for Next validation */}
      {bottomError && (
        <div className="w-full mt-4 text-center md:text-left">
          <p className="text-sm text-red-600">{bottomError}</p>
        </div>
      )}

      {selectedMethod === "Full Payment" && (
        <div className="flex flex-col mt-6">
          <p className="text-start text-lg md:text-xl lg:text-[22px]">
            <span className="font-medium">Selected Method: </span>Full Payment
          </p>
          <div className="flex justify-start items-center gap-2 my-6 text-sm md:text-base text-left">
            <p>Payment amount: </p>
            <p className="text-gray-600">LKR. {selectedPackage?.price} /=</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentOptions;
