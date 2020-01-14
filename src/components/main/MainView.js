import React, { useState } from "react";
import { Profile } from "./dashboard/Profile";
import MainHeader from "./MainHeader";
import { MuiThemeProvider } from "material-ui/styles";
import UsersView from "./users/UsersView";
import "../../App.css";
import ReportsView from "./reports/ReportsView";
const Main = props => {
  const [showCase, setshowCase] = useState("Dashboard");
  const [showAddReportsForm, setShowAddReportsForm] = useState(false);

  const content = (
    <MuiThemeProvider>
      <React.Fragment>
        <MainHeader
          doLogout={props.doLogout}
          auth={props.auth}
          showCase={showCase}
          setshowCase={setshowCase}
        />
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: "10px",
            right: "10px",
            margin: "auto"
          }}
        >
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
            <ReportsView
            showAddReportsForm={showAddReportsForm}
            setShowAddReportsForm={setShowAddReportsForm}
              reports={props.reports}
              addReport={props.addReport}
              updateReport={props.updateReport}
              deleteReport={props.deleteReport}
              fetchReportList={props.fetchReportList}
            />
            )}
        </div>
      </React.Fragment>
    </MuiThemeProvider>
  );
  return content;
};

export default React.memo(Main);
