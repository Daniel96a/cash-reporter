import React from "react";
import LoginForm from "./forms/LoginForm";
import { MuiThemeProvider } from "material-ui/styles";
import LoginHeader from "./LoginHeader";
import "../../App.css";

const LoginPage = props => {
  return (
    <MuiThemeProvider>
        <LoginHeader />
        <LoginForm doLogin={props.doLogin} />
    </MuiThemeProvider>
  );
};
export default LoginPage;
