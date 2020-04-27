import React, { useState } from "react";

import UsersView from "../components/main/users/UsersView";
import Profile from "../components/main/dashboard/Profile";
import ReportsView from "../components/main/reports/ReportsView";

import { connect } from "react-redux";
import BottomNavBar from "../components/main/BottomNavBar";

const Main = (props) => {
  const [showAddReportsForm, setShowAddReportsForm] = useState(false);
  const content = (
    <>
      {props.selectedView === "Dashboard" && <Profile />}
      {props.selectedView === "Users" && <UsersView />}
      {props.selectedView === "Reports" && (
        <ReportsView
          showAddReportsForm={showAddReportsForm}
          setShowAddReportsForm={setShowAddReportsForm}
        />
      )}
      <BottomNavBar selectedView={props.selectedView} />
    </>
  );
  return content;
};
const mapStateToProps = (state) => ({
  selectedView: state.states.selectedView,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Main);
