import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { AppBar } from "material-ui";

import "./Headers.css";

const LoginHeader = props => {
  return (
    <MuiThemeProvider>
      <React.Fragment> 
        <AppBar
          showMenuIconButton={false}
          className="app-bar"
          title="Cash Reporter"
        >
        </AppBar>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default LoginHeader;
