import React from "react";
import { AppBar, makeStyles, Typography } from "@material-ui/core";
import { headerStyle } from "../../styles/Styles";
import DrawerMenu from "./DrawerMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    height: 50,
    marginBottom: 50,
    "& .MuiSvgIcon-root": {
      fill: "white",
      "& .MuiPaper-elevation4": {
        boxShadow: "none",
      },
    },
  },
}));
const DashboardHeader = (props) => {
  const classes = useStyles();
  return (
    <div style={{position: 'relative', top: 0, left: 0, right: 0}}>
      <AppBar className={classes.root} style={headerStyle}>
        <DrawerMenu />
        <Typography
          style={{
            fontSize: 20,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          Cash Reporter
        </Typography>
      </AppBar>
    </div>
  );
};

export default DashboardHeader;
