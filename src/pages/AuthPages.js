import React from "react";
import { AuthForm } from "../components/utils/AuthForm";
export const SignInPage = () => {
  return (
    <div>
      <AuthForm use="signin" />
    </div>
  );
};

export const SignUpPage = () => {
  return (
    <div>
      <AuthForm use="signup" />
    </div>
  );
};
