import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { AppBar } from "material-ui";
import { MainMenu } from "./MainMenu";
import { BLUE } from "../../colorTheme/colors";
import { makeStyles } from "@material-ui/core";
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
          style={headerColor}
        >
          <MainMenu
            auth={props.auth}
            showCase={props.showCase}
            setshowCase={props.setshowCase}
          />
        </AppBar>
      </React.Fragment>
    </MuiThemeProvider>
  );
};
const headerColor = {
  backgroundColor: BLUE
};

export default DashboardHeader;
