import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { AppBar } from "material-ui";
import MainMenu from "./MainMenu";
import { makeStyles } from "@material-ui/core";
import { headerStyle } from "../../styles/Styles";
import BottomNavBar from "./BottomNavBar";
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
          style={headerStyle}
        >
          <MainMenu showCase={props.showCase} setshowCase={props.setshowCase} />
        </AppBar>
        <BottomNavBar
          showCase={props.showCase}
          setshowCase={props.setshowCase}
        />
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default DashboardHeader;
