import React, { Fragment } from "react";
import { AppBar, makeStyles, Typography } from "@material-ui/core";
import MainMenu from "./MainMenu";
import { headerStyle } from "../../styles/Styles";
import ThemeSwitch from "../../switches/ThemeSwitch";
const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiSvgIcon-root": {
      fill: "white",
      "& .MuiPaper-elevation4": {
        boxShadow: "none",
      }
    }
  }
}));
const DashboardHeader = props => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar className={classes.root} style={headerStyle}>
        <Typography style={{ fontSize: 20, margin: 10 }}>
          Cash Reporter
        </Typography>
        <ThemeSwitch />
        {props.isAuthenticated ? (
          <MainMenu showCase={props.showCase} setshowCase={props.setshowCase} />

        ) : <Fragment />}
      </AppBar>
    </Fragment>
  );
};

export default DashboardHeader;
