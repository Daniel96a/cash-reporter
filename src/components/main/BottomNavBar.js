import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { connect } from "react-redux";
import { changeView } from "../../redux/actions/states";
import { bottomNavbarStyle } from "../../styles/Styles";
import { navigate } from "@reach/router";
export const BottomNavBar = ({ changeView, view }) => {
  const handleChange = (event, newValue) => {
    changeView(newValue);
    navigate(`/${newValue}`);
  };

  return (
    <BottomNavigation
      value={view}
      onChange={handleChange}
      className={bottomNavbarStyle().root}
    >
      <BottomNavigationAction
        className={bottomNavbarStyle().button}
        showLabel
        label="Dashboard"
        value="dashboard"
      />
      <BottomNavigationAction
        className={bottomNavbarStyle().button}
        showLabel
        label="Users"
        value="users"
      />
      <BottomNavigationAction
        className={bottomNavbarStyle().button}
        showLabel
        label="Reports"
        value="reports"
      />
    </BottomNavigation>
  );
};

const mapStateToProps = (state) => ({
  view: state.states.selectedView,
});
export default connect(mapStateToProps, {
  changeView,
})(BottomNavBar);
