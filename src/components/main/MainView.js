import React, { useState } from "react";
import Profile from "./dashboard/Profile";
import MainHeader from "./MainHeader";
import UsersView from "./users/UsersView";
import "../../App.css";
import ReportsView from "./reports/ReportsView";
import { connect } from "react-redux";
const Main = props => {
  const [showAddReportsForm, setShowAddReportsForm] = useState(false);
  const content = (
    <React.Fragment>
      <MainHeader
        doLogout={props.doLogout}
        showCase={props.selectedView}
        setshowCase={props.setSelectedView}
      />
      {props.selectedView === "Dashboard" && <Profile />}
      {props.selectedView === "Users" && <UsersView />}
      {props.selectedView === "Reports" && (
        <ReportsView
          showAddReportsForm={showAddReportsForm}
          setShowAddReportsForm={setShowAddReportsForm}
        />
      )}
    </React.Fragment>
  );
  return content;
};
const mapStateToProps = state => ({
  selectedView: state.states.selectedView
});

export default connect(mapStateToProps)(Main);
