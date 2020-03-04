import React, { useState, Fragment } from "react";
import Profile from "./dashboard/Profile";
import UsersView from "./users/UsersView";
import "../../App.css";
import BottomNavBar from "./BottomNavBar";
import ReportsView from "./reports/ReportsView";

import { connect } from "react-redux";

const Main = props => {
  const [showAddReportsForm, setShowAddReportsForm] = useState(false);
  const content = (
    <Fragment>
      {props.selectedView === "Dashboard" && <Profile />}
      {props.selectedView === "Users" && <UsersView />}
      {props.selectedView === "Reports" && (
        <ReportsView
          showAddReportsForm={showAddReportsForm}
          setShowAddReportsForm={setShowAddReportsForm}
        />
      )}
      <BottomNavBar />
    </Fragment>
  );
  return content;
};
const mapStateToProps = state => ({
  selectedView: state.states.selectedView,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Main);
