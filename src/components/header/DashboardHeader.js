import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { AppBar } from "material-ui";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import "./DashboardHeader.css";
import RaisedButton from "material-ui/RaisedButton";

const DashboardHeader = props => {
  const logout = e => {
    props.doLogout();
    e.preventDefault();
  };
  return (
    <MuiThemeProvider>
      <React.Fragment>
          <AppBar
            showMenuIconButton={false}
            className="app-bar"
            title="Cash Reporter"
          >
            <RaisedButton
              label="Logout"
              className="logout-button"
              onClick={logout.bind(this)}
            />
            <IconButton color="inherit" aria-label="open drawer" edge="end">
              <MenuIcon />
            </IconButton>
          </AppBar>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default DashboardHeader;
