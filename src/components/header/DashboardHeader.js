import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { AppBar } from "material-ui";

import "./Headers.css";
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
          <MenuList doLogout={props.doLogout} showCase={props.showCase} setshowCase={props.setshowCase} />
        </AppBar>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default DashboardHeader;
