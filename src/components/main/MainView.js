import React, { useState } from "react";
import { Profile } from "./dashboard/Profile";
import MainHeader from "./MainHeader";
import { MuiThemeProvider } from "material-ui/styles";
import UsersView from "./users/UsersView";
import ReportList from "./reports/ReportList";

const Main = props => {
  const [showCase, setshowCase] = useState("Dashboard");
  console.log(props.employees);
  const content = (
    <MuiThemeProvider>
      <React.Fragment>
        <MainHeader
          doLogout={props.doLogout}
          auth={props.auth}
          showCase={showCase}
          setshowCase={setshowCase}
        />
        {showCase === "Dashboard" && (
          <Profile
            name={props.auth.user.username}
            status={props.auth.user.permission}
          />
        )}
        {showCase === "Users" && (
          <UsersView
            customers={props.customers}
            addCustomer={props.addCustomer}
            updateCustomer={props.updateCustomer}
            deleteCustomer={props.deleteCustomer}
            fetchCustomerList={props.fetchCustomerList}
            employees={props.employees}
            addEmployee={props.addEmployee}
            updateEmployee={props.updateEmployee}
            deleteEmployee={props.deleteEmployee}
            fetchEmployeeList={props.fetchEmployeeList}
          />
        )}
        {showCase === "Reports" && (
          <ReportList
            reports={props.reports}
            addReport={props.addReport}
            updateReport={props.updateReport}
            deleteReport={props.deleteReport}
            fetchReportList={props.fetchReportList}
          />
        )}
      </React.Fragment>
    </MuiThemeProvider>
  );
  return content;
};

export default React.memo(Main);