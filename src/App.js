import React from "react";
import { connect } from "react-redux";
import MainView from "./components/main/MainView";
import { doLogin, doLogout } from "./actions/auth";
import LoginPage from "./components/login/LoginPage";
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
    <div>
      {!auth.isAuthenticated && <LoginPage doLogin={doLogin} />}
      {auth.isAuthenticated && (
        <MainView
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
