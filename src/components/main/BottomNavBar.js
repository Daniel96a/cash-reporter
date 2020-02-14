import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles
} from "@material-ui/core";
import { connect } from "react-redux";
import { changeView } from "../../redux/actions/states";

const BottomNavBar = props => {
  const useStyles = makeStyles({
    button: {
      color: "lightgrey"
    },
    root: {
      backgroundColor: "rgba(32, 42, 53, 1 )",
      color: "white",
      backdropFilter: "blur(8px)",
      position: "fixed",
      zIndex: 1,
      bottom: 0,
      width: "100%",

    }
  });
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    props.changeView(newValue);
  };
  return (
    <MuiThemeProvider>
      <BottomNavigation
        value={props.view}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          className={classes.button}
          showLabel
          label="Dashboard"
          value="Dashboard"
        />
        <BottomNavigationAction
          className={classes.button}
          showLabel
          label="Users"
          value="Users"
        />
        <BottomNavigationAction
          className={classes.button}
          showLabel
          label="Reports"
          value="Reports"
        />
      </BottomNavigation>
    </MuiThemeProvider>
  );
};

const mapStateToProps = state => ({
  view: state.states.selectedView
});
export default connect(mapStateToProps, {
  changeView
})(BottomNavBar);
