import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { AppBar } from "material-ui";
import { headerStyle } from "../../styles/Styles";

const LoginHeader = props => {
  return (
    <MuiThemeProvider>
      <React.Fragment> 
        <AppBar style={headerStyle}
          showMenuIconButton={false}
          className="app-bar"
          title="Cash Reporter"
          titleStyle={{lineHeight: "48px"}}
>
        </AppBar>
      </React.Fragment>
    </MuiThemeProvider>
  );
};


export default LoginHeader;
