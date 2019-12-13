import React from "react";
import LoginForm from "../forms/LoginForm";
import { MuiThemeProvider } from "material-ui/styles";
import LoginHeader from "../header/LoginHeader";

const LoginPage = props => {
  return (
    <MuiThemeProvider>
      <div className="form-div">
        <LoginHeader />
        <LoginForm doLogin={props.doLogin} />
      </div>
    </MuiThemeProvider>
  );
};
export default LoginPage;
