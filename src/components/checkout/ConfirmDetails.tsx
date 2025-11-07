import React, { useEffect, useState } from "react";

import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { FaRegCircle } from "react-icons/fa";

type PackageDetail = {
  text: string;
  subItems?: string[];
};

type PackageType = {
  price: string;
  description?: string;
  mainImg?: string;
  images?: string[];
  category?: string;
  details?: PackageDetail[];
};

interface ConfirmDetailsProps {
  selectedPackage?: PackageType | null;
  triggerValidation?: boolean; // comes from CheckoutStepper when clicking "Next"
  onValidationChange?: (isValid: boolean) => void;
  onDataChange?: (data: Record<string, string>) => void;
}

const ConfirmDetails: React.FC<ConfirmDetailsProps> = ({
  selectedPackage,
  triggerValidation = false,
  onValidationChange,
  onDataChange,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [showErrors, setShowErrors] = useState(false);

  const validate = React.useCallback(() => {
    let isValid = true;
    const newErrors = { firstName: "", lastName: "", email: "", phone: "" };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email";
      isValid = false;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }, [formData]);

  // Validate when triggered by parent
  useEffect(() => {
    if (!triggerValidation) return;
    const valid = validate();
    // display errors until user interacts
    setShowErrors(true);
    if (onValidationChange) onValidationChange(valid);
    // also send latest data back to parent
    if (onDataChange) onDataChange(formData);
  }, [triggerValidation, validate, formData, onValidationChange, onDataChange]);

  // Send updated data to parent
  useEffect(() => {
    if (onDataChange) onDataChange(formData);
  }, [formData, onDataChange]);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="text-left bg-white">
      {!selectedPackage ? (
        <h2 className="text-2xl font-semibold mb-3">No package selected</h2>
      ) : (
        <div className="flex flex-col md:flex-row-reverse gap-10 lg:gap-1 justify-between">
          {/* Package details */}
          <div className="w-full md:w-1/2 py-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-belda mb-4 md:mb-6">
              Package Details
            </h1>
            {selectedPackage.details && selectedPackage.details.length > 0 && (
              <div className="h-[35dvh] lg:h-[68dvh] overflow-hidden overflow-y-auto text-sm md:text-base lg:text-lg font-light ml-1">
                <ul className="space-y-3">
                  {selectedPackage.details.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <FaRegCircle className="mr-2 mt-1.5 md:mt-2 flex-shrink-0 w-2 h-2" />
                      <div>
                        <p>{point.text}</p>
                        {point.subItems && point.subItems.length > 0 && (
                          <ul className="ml-2 list-inside list-disc">
                            {point.subItems.map((subItem, idx) => (
                              <li key={idx}>{subItem}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Order details form */}
          <div className="w-full md:w-1/2 lg:w-5/12 space-y-5 p-3 md:px-6 md:py-4 bg-[#F8F8F8] rounded-lg">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-belda mb-4 md:mb-6">
              Order Details
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-ternary/60">
              <span className="font-semibold text-sm md:text-base text-ternary">
                Category:
              </span>{" "}
              {selectedPackage.category || "N/A"}
            </p>

            <p className="text-sm md:text-base lg:text-lg text-ternary/60">
              <span className="font-semibold text-sm md:text-base text-ternary">
                Price:
              </span>{" "}
              LKR. {selectedPackage.price} /=
            </p>

            <Field>
              <FieldLabel className="text-sm md:text-base">
                First Name
              </FieldLabel>
              <Input
                className="text-sm md:text-base py-6 -mt-1 focus:border-none border-2 border-ternary/60"
                value={formData.firstName}
                onChange={(e) => {
                  handleChange("firstName", e.target.value);
                  setErrors((prev) => ({ ...prev, firstName: "" }));
                }}
                placeholder="Enter your first name"
              />
              {showErrors && errors.firstName && (
                <FieldError className="text-red-600 -mt-1">
                  {errors.firstName}
                </FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel className="text-sm md:text-base">
                Last Name
              </FieldLabel>
              <Input
                className="text-sm md:text-base py-6 -mt-1 focus:border-none border-2 border-ternary/60"
                value={formData.lastName}
                onChange={(e) => {
                  handleChange("lastName", e.target.value);
                  setErrors((prev) => ({ ...prev, lastName: "" }));
                }}
                placeholder="Enter your last name"
              />
              {showErrors && errors.lastName && (
                <FieldError className="text-red-600 -mt-1">
                  {errors.lastName}
                </FieldError>
              )}
            </Field>

            <Field>
              <FieldLabel className="text-sm md:text-base">
                Email Address
              </FieldLabel>
              <Input
                className="text-sm md:text-base py-6 -mt-1 focus:border-none border-2 border-ternary/60"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  handleChange("email", e.target.value);
                  setErrors((prev) => ({ ...prev, email: "" }));
                }}
                placeholder="Enter your email"
              />
              {showErrors && errors.email && (
                <FieldError className="text-red-600 -mt-1">
                  {errors.email}
                </FieldError>
              )}
            </Field>

            <Field>
              <FieldLabel className="text-sm md:text-base">
                Contact Number
              </FieldLabel>
              <Input
                className="text-sm md:text-base py-6 -mt-1 focus:border-none border-2 border-ternary/60"
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  handleChange("phone", e.target.value);
                  setErrors((prev) => ({ ...prev, phone: "" }));
                }}
                placeholder="Enter your 10-digit contact number"
              />
              {showErrors && errors.phone && (
                <FieldError className="text-red-600 -mt-1">
                  {errors.phone}
                </FieldError>
              )}
            </Field>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmDetails;
