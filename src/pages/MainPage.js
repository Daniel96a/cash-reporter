import React, { useState } from "react";

import UsersView from "./UsersPage";
import Profile from "../components/main/dashboard/ProfileCard";
import ReportsView from "../components/main/reports/ReportsView";

import { connect } from "react-redux";

const Main = (props) => {
  const [showAddReportsForm, setShowAddReportsForm] = useState(false);
  return (
    <div style={{position: 'relative', marginBottom: -11, overflow: 'scroll'}}>
      {props.selectedView === "dashboard" && <Profile />}
      {props.selectedView === "users" && <UsersView />}
      {props.selectedView === "reports" && (
        <ReportsViews
          showAddReportsForm={showAddReportsForm}
          setShowAddReportsForm={setShowAddReportsForm}
        />
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  selectedView: state.states.selectedView,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Main);
