import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { bottomNavbarStyle } from "../../styles/Styles";
import { navigate } from "@reach/router";
export const BottomNavBar = ({ changeView, states: { selectedView } }) => {
  const handleChange = (event, newValue) => {
    changeView(newValue);
    navigate(`/${newValue}`, { state: { PrevPath: `/${selectedView}` } });
  };

  return (
    <BottomNavigation
      value={selectedView}
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

export default BottomNavBar;
