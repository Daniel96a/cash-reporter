import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import { connect } from "react-redux";
import Dashboard from "./components/dashboard/Dashboard";
import { ProtectedRoute } from "./protected.route";
import { doLogin, doLogout } from "./actions/auth";
import "./App.css";
import { LoginRoute } from "./login.route";
import LoginPage from "./components/loginPage/LoginPage";
import {
  addCustomer,
  updateCustomer,
  deleteCustomer,
  fetchCustomerList
} from "./actions/customers";
import {
  addEmployee,
  updateEmployee,
  deleteEmployee,
  fetchEmployeeList
} from "./actions/employees";
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
  customers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  fetchCustomerList,
  employees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  fetchEmployeeList,
  reports,
  addReport,
  updateReport,
  deleteReport,
  fetchReportList
}) => {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <LoginRoute
            exact
            path="/login"
            component={LoginPage}
            auth={auth}
            doLogin={doLogin}
          />
          <ProtectedRoute
            exact
            path="/"
            component={Dashboard}
            doLogout={doLogout}
            addCustomer={addCustomer}
            updateCustomer={updateCustomer}
            deleteCustomer={deleteCustomer}
            fetchCustomerList={fetchCustomerList}
            customers={customers}
            auth={auth}
            employees={employees}
            addEmployee={addEmployee}
            updateEmployee={updateEmployee}
            deleteEmployee={deleteEmployee}
            fetchEmployeeList={fetchEmployeeList}
            reports={reports}
            addReport={addReport}
            updateReport={updateReport}
            deleteReport={deleteReport}
            fetchReportList={fetchReportList}
          />
          <Route exact path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
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
  addCustomer,
  updateCustomer,
  deleteCustomer,
  fetchCustomerList,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  fetchEmployeeList,
  addReport,
  updateReport,
  deleteReport,
  fetchReportList
})(App);
