import React from "react";
import LoginForm from "../components/login/forms/LoginForm";
import { navigate } from "@reach/router";
const LoginPage = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    navigate("/dashboard");
  }
  return <LoginForm />;
};
export default LoginPage;
