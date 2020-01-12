import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { AppBar } from "material-ui";
import { MainMenu } from "./MainMenu";
import { makeStyles } from "@material-ui/core";
import { BLUE } from "../../colorTheme/colors";
const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiSvgIcon-root": {
      fill: "white"
    }
  }
}));
const DashboardHeader = props => {
  const classes = useStyles();

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar
          showMenuIconButton={false}
          className={classes.root}
          title="Cash Reporter"
          titleStyle={{ lineHeight: "48px" }}
          style={headerColor}
        >
          <MainMenu
            doLogout={props.doLogout}
            showCase={props.showCase}
            setshowCase={props.setshowCase}
          />
        </AppBar>
      </React.Fragment>
    </MuiThemeProvider>
  );
};
const headerColor = {
  height: 48,
  backgroundColor: BLUE,
  zIndex: 100000,
  position: "fixed",
};

export default DashboardHeader;
