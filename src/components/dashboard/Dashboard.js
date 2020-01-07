import React, { useState } from "react";
import { Profile } from "./profile/Profile";
import DashboardHeader from "../header/DashboardHeader";
import { MuiThemeProvider } from "material-ui/styles";
import UsersView from "./users/UsersView";

const Dashboard = props => {
  const [showCase, setshowCase] = useState("Dashboard");
  console.log(props.employees)
  const content = (
    <MuiThemeProvider>
      <React.Fragment>
        <DashboardHeader
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
            fetchCustomerList={props.fetchCustomerList}
            employees={props.employees}
            addEmployee={props.addEmployee}
            fetchEmployeeList={props.fetchEmployeeList}
          />
        )}
      </React.Fragment>
    </MuiThemeProvider>
  );
  return content;
};

export default React.memo(Dashboard);
