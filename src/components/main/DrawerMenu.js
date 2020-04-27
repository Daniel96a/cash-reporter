import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {
  IconButton,
  useMediaQuery,
  Typography,
  Paper,
  SwipeableDrawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ThemeSwitch from "./ThemeSwitch";
import { doLogout } from "../../redux/actions/auth";
import { chooseTheme } from "../../redux/actions/theme";

import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  logoutButton: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    textAlign: "center",
    margin: "auto",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: "calc(100vw - 250px)",
  },
  button: {
    backgroundColor: theme.palette.background.default,
    margin: "auto",
    width: 218,
  },
  div: {
    "& div": {
      top: 50,
      bottom: 58,
    },
  },
}));

const DrawerMenu = (props) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const logout = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    props.doLogout();
    setState({ ...state, [side]: open });
  };

  const themeDisabled = !props.theme.themeDisabled;
  const toggleEnableTheme = () => {
    if (prefersDarkMode) {
      props.chooseTheme({
        isDark: true,
        themeNumber: 1,
        themeDisabled: props.theme.themeDisabled,
      });
    }
    if (!prefersDarkMode) {
      props.chooseTheme({
        isDark: false,
        themeNumber: 0,
        themeDisabled: props.theme.themeDisabled,
      });
    }
    localStorage.removeItem("theme");

    props.chooseTheme({
      isDark: !props.theme.isDark,
      themeNumber: props.theme.themeNumber,
      themeDisabled: themeDisabled,
    });
  };
  console.log(props.theme);
  const sideList = (side) => (
    <div className={classes.list} role="presentation">
      <List>
        <ListItem>
          <ListItemText>Drawer Menu</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ThemeSwitch />
        </ListItem>
        <ListItem
          className={classes.button}
          button
          component={Paper}
          onClick={toggleEnableTheme.bind(this)}
        >
          {props.theme.themeDisabled ? (
            <Typography style={{ margin: "auto" }}>Select theme</Typography>
          ) : (
            <Typography color="error" style={{ margin: "auto" }}>
              Use preferred theme
            </Typography>
          )}
        </ListItem>
        <Divider />
      </List>
      {props.isAuthenticated ? (
        <ListItem
          button
          className={classes.logoutButton}
          onClick={logout(side, false)}
        >
          <ListItemText>Logout</ListItemText>
        </ListItem>
      ) : (
        <Fragment />
      )}
    </div>
  );
  return (
    <div style={{ position: "absolute" }} className={classes.div}>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="primary"
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
        swipeAreaWidth={40}
        disableSwipeToOpen={false}
      >
        {sideList("left")}
      </SwipeableDrawer>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  theme: state.theme,
});
export default connect(mapStateToProps, { doLogout, chooseTheme })(DrawerMenu);
