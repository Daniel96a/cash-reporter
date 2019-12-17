import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { AppBar } from "material-ui";

import "./DashboardHeader.css";
import { MenuList } from "./MenuList";

const DashboardHeader = props => {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar
          showMenuIconButton={false}
          className="app-bar"
          title="Cash Reporter"
        >
          <MenuList doLogout={props.doLogout} />
        </AppBar>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default DashboardHeader;
