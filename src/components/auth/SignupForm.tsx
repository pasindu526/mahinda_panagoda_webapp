import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import signupImg from "@/assets/img/signupRightSide.jpg";
import MPlogo from "@/assets/img/MP_Green_Main_Logo.png";

const SignupForm: React.FC = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showErrors, setShowErrors] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email";
      isValid = false;
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = validate();
    setShowErrors(true);
    if (!valid) return;

    navigate("/login");
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0 border-0 shadow-xl bg-white">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit} noValidate>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-7/12">
                  <img src={MPlogo} />
                </div>
                {/* <h1 className="text-2xl font-bold"></h1> */}
                <p className="mt-4 text-ternary font-medium text-lg capitalize">
                  Create your account
                </p>
              </div>
              <Field className="relative">
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Nimal Perera"
                  className="text-sm py-5 -mt-1 mb-1 focus:border-none border-2 border-ternary/60"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
                {showErrors && errors.name && (
                  <FieldError className="text-red-600 absolute z-10 -bottom-5 text-xs">
                    {errors.name}
                  </FieldError>
                )}
              </Field>
              <Field className="relative">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  className="text-sm py-5 -mt-1 mb-1 focus:border-none border-2 border-ternary/60"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                {showErrors && errors.email && (
                  <FieldError className="text-red-600 absolute z-10 -bottom-5 text-xs">
                    {errors.email}
                  </FieldError>
                )}
              </Field>
              <Field className="relative">
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Password"
                      className="text-sm py-5 -mt-1 mb-1 focus:border-none border-2 border-ternary/60"
                      value={formData.password}
                      onChange={(e) => handleChange("password", e.target.value)}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Confirm Password
                    </FieldLabel>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm Password"
                      className="text-sm py-5 -mt-1 mb-1 focus:border-none border-2 border-ternary/60"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        handleChange("confirmPassword", e.target.value)
                      }
                    />
                  </Field>
                </Field>
                {showErrors && errors.password && (
                  <FieldError className="text-red-600 absolute z-10 -bottom-5 text-xs">
                    {errors.password}
                  </FieldError>
                )}
                {showErrors && errors.confirmPassword && (
                  <FieldError className="text-red-600 absolute z-10 -bottom-5 text-xs">
                    {errors.confirmPassword}
                  </FieldError>
                )}
                {/* <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription> */}
              </Field>
              <Field>
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-ternary rounded-lg p-5 mt-1 text-base cursor-pointer capitalize"
                >
                  Create Account
                </Button>
              </Field>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                <span className="text-xs">Or</span>
              </FieldSeparator>
              <FieldDescription className="text-center">
                Already have an account?{" "}
                <a
                  className="text-secondary hover:!text-secondary/70"
                  href="/login"
                >
                  Login
                </a>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src={signupImg}
              alt="Image"
              className="absolute grayscale-75 inset-0 h-full w-full object-cover object-right"
            />
          </div>
        </CardContent>
      </Card>
      {/* <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription> */}
    </div>
  );
};

export default SignupForm;
