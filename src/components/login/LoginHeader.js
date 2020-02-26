import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { headerStyle } from "../../styles/Styles";
import ThemeSwitch from "../../switches/ThemeSwitch";

const LoginHeader = props => {
  return (
    <React.Fragment>
      <AppBar
        style={headerStyle}
        className="app-bar"
      >
        <Typography style={{ fontSize: 20, margin: 10 }}>
          Cash Reporter
        </Typography>
        <div style={{ position: "fixed", right: 10, top: 5 }}>
          <ThemeSwitch />
        </div>
      </AppBar>
    </React.Fragment>
  );
};

export default LoginHeader;
