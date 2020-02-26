import React from "react";
import { AppBar, makeStyles, Typography } from "@material-ui/core";
import MainMenu from "./MainMenu";
import { headerStyle } from "../../styles/Styles";
import BottomNavBar from "./BottomNavBar";
import ThemeSwitch from "../../switches/ThemeSwitch";
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
    <React.Fragment>
      <AppBar className={classes.root} style={headerStyle}>
        <Typography style={{ fontSize: 20, margin: 10 }}>
          Cash Reporter
        </Typography>
        <div style={{ position: "fixed", right: 40, top: 5 }}>
          <ThemeSwitch />
        </div>
        <MainMenu showCase={props.showCase} setshowCase={props.setshowCase} />
      </AppBar>
      <BottomNavBar showCase={props.showCase} setshowCase={props.setshowCase} />
    </React.Fragment>
  );
};

export default DashboardHeader;
