import React from "react";
import { AppBar, makeStyles, Typography } from "@material-ui/core";
import { headerStyle } from "../../styles/Styles";
import DrawerMenu from "./DrawerMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginBottom: 0,
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
  );
};

export default DashboardHeader;
