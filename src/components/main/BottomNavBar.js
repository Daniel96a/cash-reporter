import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { connect } from "react-redux";
import { changeView } from "../../redux/actions/states";
import { bottomNavbarStyle } from "../../styles/Styles";
export const BottomNavBar = props => {
  const handleChange = (event, newValue) => {
    props.changeView(newValue);
  };
  return (
    <BottomNavigation
      value={props.view}
      onChange={handleChange}
      className={bottomNavbarStyle().root}
    >
      <BottomNavigationAction
        className={bottomNavbarStyle().button}
        showLabel
        label="Dashboard"
        value="Dashboard"
      />
      <BottomNavigationAction
        className={bottomNavbarStyle().button}
        showLabel
        label="Users"
        value="Users"
      />
      <BottomNavigationAction
        className={bottomNavbarStyle().button}
        showLabel
        label="Reports"
        value="Reports"
      />
    </BottomNavigation>
  );
};

const mapStateToProps = state => ({
  view: state.states.selectedView
});
export default connect(mapStateToProps, {
  changeView
})(BottomNavBar);
