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

import loginImg from "@/assets/img/loginRightSide.jpg";
import MPlogo from "@/assets/img/MP_Green_Main_Logo.png";
// import { Separator grayscale-75 } from "@/components/ui/separator";

const LoginForm: React.FC = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [showErrors, setShowErrors] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
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

    // TODO: call login API here. For now, navigate to home on success.
    navigate("/");
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0 border-0 shadow-xl bg-white">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit} noValidate>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-2/3">
                  <img src={MPlogo} />
                </div>
                {/* <Separator className="my-2 bg-ternary/10" /> */}
                <p className="mt-4 text-ternary font-medium text-lg">
                  Login to Your Account
                </p>
              </div>
              <Field className="relative">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  className="text-sm md:text-base py-5 -mt-1 mb-1 focus:border-none border-2 border-ternary/60 capitalize"
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
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  {/* Forgot your password? */}
                  {/* <a
                    href="#"
                    className="ml-auto text-sm text-ternary/50 underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a> */}
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="text-sm md:text-base py-5 -mt-1 mb-1 focus:border-none border-2 border-ternary/60"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                />
                {showErrors && errors.password && (
                  <FieldError className="text-red-600 absolute z-10 -bottom-5 text-xs">
                    {errors.password}
                  </FieldError>
                )}
              </Field>
              <Field>
                <Button
                  onClick={() => {
                    // keep button click handled by form submit
                  }}
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-ternary rounded-lg p-5 mt-1 text-base cursor-pointer capitalize"
                >
                  Login
                </Button>
              </Field>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                <span className="text-xs">Or</span>
              </FieldSeparator>
              {/* continue with google */}
              {/* <Field className="gap-4">
                <Button variant="outline" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Continue with Google
                </Button>
              </Field> */}
              <FieldDescription className="text-center">
                Don&apos;t have an account?{" "}
                <a
                  className="text-secondary hover:!text-secondary/70"
                  href="/signup"
                >
                  Sign up
                </a>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src={loginImg}
              alt="Image"
              className="absolute grayscale-75 inset-0 h-full w-full object-cover"
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

export default LoginForm;
