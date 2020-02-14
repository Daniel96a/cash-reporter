import React, { useState } from "react";
import Profile from "./dashboard/Profile";
import MainHeader from "./MainHeader";
import { MuiThemeProvider } from "material-ui/styles";
import UsersView from "./users/UsersView";
import "../../App.css";
import ReportsView from "./reports/ReportsView";
import { connect } from "react-redux";
const Main = props => {
  const [showAddReportsForm, setShowAddReportsForm] = useState(false);
  const content = (
    <MuiThemeProvider>
      <React.Fragment>
        <MainHeader
          doLogout={props.doLogout}
          showCase={props.selectedView}
          setshowCase={props.setSelectedView}
        />
        <div
          style={{
            position: "relative",
            top: 58,
            bottom: 56,
            left: 0,
            right: 0,
            margin: "auto",
            overflowY: "scroll"
          }}
        >
          {props.selectedView === "Dashboard" && <Profile />}
          {props.selectedView === "Users" && <UsersView />}
          {props.selectedView === "Reports" && (
            <ReportsView
              showAddReportsForm={showAddReportsForm}
              setShowAddReportsForm={setShowAddReportsForm}
            />
          )}
        </div>
      </React.Fragment>
    </MuiThemeProvider>
  );
  return content;
};
const mapStateToProps = state => ({
  selectedView: state.states.selectedView
});

export default connect(mapStateToProps)(Main);
