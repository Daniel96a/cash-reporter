import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { AppBar } from "material-ui";
const LoginHeader = props => {
  return (
    <MuiThemeProvider>
      <div>
        <AppBar title="Cash Reporter"></AppBar>
      </div>
    </MuiThemeProvider>
  );
};

export default LoginHeader;
