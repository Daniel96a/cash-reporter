import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import { navigate } from "@reach/router";
const LoginPage = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    navigate("/dashboard");
  }
  return <LoginForm />;
};
export default LoginPage;
