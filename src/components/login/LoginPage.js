import React from "react";
import LoginForm from "./forms/LoginForm";
import LoginHeader from "./LoginHeader";

const LoginPage = props => {
  return (
    <React.Fragment>
      <LoginHeader />
      <LoginForm />
    </React.Fragment>
  );
};
export default LoginPage;
