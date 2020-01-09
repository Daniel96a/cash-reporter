import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { AppBar } from "material-ui";
import { BLUE } from "../../colorTheme/colors";

const LoginHeader = props => {
  return (
    <MuiThemeProvider>
      <React.Fragment> 
        <AppBar style={headerStyle}
          showMenuIconButton={false}
          className="app-bar"
          title="Cash Reporter"
        >
        </AppBar>
      </React.Fragment>
    </MuiThemeProvider>
  );
};
const headerStyle = {
  backgroundColor: BLUE,
  textAlign: "center"
};

export default LoginHeader;
