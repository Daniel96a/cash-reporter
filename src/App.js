import React from "react";
import { connect } from "react-redux";
import MainView from "./components/main/MainView";
import { doLogin, doLogout } from "./actions/auth";
import LoginPage from "./components/login/LoginPage";

import {
  addReport,
  updateReport,
  deleteReport,
  fetchReportList
} from "./actions/reports";

const App = ({
  doLogin,
  doLogout,
  auth,

  reports,
  addReport,
  updateReport,
  deleteReport,
  fetchReportList
}) => {
  return (
    <div>
      {!auth.isAuthenticated && <LoginPage doLogin={doLogin} />}
      {auth.isAuthenticated && (
        <MainView
          doLogout={doLogout}
          auth={auth}
          reports={reports}
          addReport={addReport}
          updateReport={updateReport}
          deleteReport={deleteReport}
          fetchReportList={fetchReportList}
        />
      )}
    </div>
  );
};
console.log();

const mapStateToProps = state => ({
  auth: state.auth,
  customers: state.customers,
  employees: state.employees,
  reports: state.reports
});

export default connect(mapStateToProps, {
  doLogin,
  doLogout,
  addReport,
  updateReport,
  deleteReport,
  fetchReportList
})(App);
