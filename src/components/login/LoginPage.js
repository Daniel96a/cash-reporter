import React from "react";
import LoginForm from "./forms/LoginForm";
import { MuiThemeProvider } from "material-ui/styles";
import LoginHeader from "./LoginHeader";

const LoginPage = props => {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <LoginHeader />
        <LoginForm doLogin={props.doLogin} />
      </React.Fragment>
    </MuiThemeProvider>
  );
};
export default LoginPage;
