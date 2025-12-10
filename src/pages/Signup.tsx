import SignupForm from "@/components/auth/SignUpForm";
import React from "react";

const Signup: React.FC = () => {
  return (
    <div className="bg-gray-100 flex min-h-svh max-h-screen flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
