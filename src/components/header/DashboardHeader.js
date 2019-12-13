import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { AppBar, RaisedButton } from "material-ui";
const DashboardHeader = props => {
  const logout = e => {
    props.doLogout();
    e.preventDefault();
    // props.doLogout();
    // e.preventDefault();
  };
  return (
    <MuiThemeProvider>
      <div>
        <AppBar title="Cash Reporter">
          <RaisedButton
            className="logout-button"
            label="Logout"
            onClick={logout.bind(this)}
          />
        </AppBar>
    </div>
      </MuiThemeProvider>
  );
};

export default DashboardHeader;
