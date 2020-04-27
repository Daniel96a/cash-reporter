import React, { useState } from "react";

import UsersView from "../components/main/users/UsersView";
import Profile from "../components/main/dashboard/Profile";
import ReportsView from "../components/main/reports/ReportsView";

import { connect } from "react-redux";

const Main = (props) => {
  const [showAddReportsForm, setShowAddReportsForm] = useState(false);
  const content = (
    <>
      {props.selectedView === "dashboard" && <Profile />}
      {props.selectedView === "users" && <UsersView />}
      {props.selectedView === "reports" && (
        <ReportsView
          showAddReportsForm={showAddReportsForm}
          setShowAddReportsForm={setShowAddReportsForm}
        />
      )}
    </>
  );
  return content;
};
const mapStateToProps = (state) => ({
  selectedView: state.states.selectedView,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Main);
