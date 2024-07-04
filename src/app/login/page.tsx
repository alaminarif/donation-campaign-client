import LoginPage from "@/components/login/Login";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "DC | Login",
};
const Login = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default Login;
