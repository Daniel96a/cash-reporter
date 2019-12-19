import React, { useState } from "react";
import CustomerList from './customerList/CustomerList'
import { Profile } from "./profile/Profile";
import DashboardHeader from "../header/DashboardHeader";
import CreateUserForm from "../forms/CreateUserForm";
import { MuiThemeProvider } from "material-ui/styles";

const Dashboard = props => {
  const [showCase, setshowCase] = useState("dashboard");



  const content = (
    <MuiThemeProvider>
      <React.Fragment>
        <DashboardHeader
          doLogout={props.doLogout}
          auth={props.auth}
          showCase={showCase}
          setshowCase={setshowCase}
        />
        {showCase === "dashboard" && (
          <Profile
            name={props.auth.user.username}
            status={props.auth.user.permission}
          />
        )}

        {showCase === "customers" && (
          <CreateUserForm addCustomer={props.addCustomer} />
        )}
        {showCase === "customers" && <CustomerList fetchCustomerList={props.fetchCustomerList} customers={props.customers}/>}
      </React.Fragment>
    </MuiThemeProvider>
  );

  return content;
};

export default Dashboard;
