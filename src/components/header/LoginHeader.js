import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { AppBar } from "material-ui";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import "./DashboardHeader.css";

const LoginHeader = props => {
  return (
    <MuiThemeProvider>
      <React.Fragment> 
        <AppBar
          showMenuIconButton={false}
          className="app-bar"
          title="Cash Reporter"
        >
          <IconButton color="inherit" aria-label="open drawer" edge="end">
            <MenuIcon />
          </IconButton>
        </AppBar>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default LoginHeader;
