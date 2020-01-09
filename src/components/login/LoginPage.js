import React from "react";
import LoginForm from "./forms/LoginForm";
import { MuiThemeProvider } from "material-ui/styles";
import LoginHeader from "./LoginHeader";
import '../../App.css'

const LoginPage = props => {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <LoginHeader />
        <div className="App">

          <LoginForm doLogin={props.doLogin} />
        </div>
      </React.Fragment>
    </MuiThemeProvider>
  );
};
export default LoginPage;
