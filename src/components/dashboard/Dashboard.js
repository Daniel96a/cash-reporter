import React, { useState } from "react";
import { Profile } from "./profile/Profile";
import DashboardHeader from "../header/DashboardHeader";
import CreateUserForm from "../forms/CreateUserForm";
import { MuiThemeProvider } from "material-ui/styles";
//// import auth from "./actions/auth";

// import { doLogin, doLogout } from "./actions/auth";

const Dashboard = props => {
  const [profileName] = useState("Daniel");
  const [profilStatus] = useState("Admin");

  const content = (
    <MuiThemeProvider>
      <div className="div-style">
        <DashboardHeader doLogout={props.doLogout} auth={props.auth} />
        <Profile name={profileName} status={profilStatus} />
        <CreateUserForm />
      </div>
      
    </MuiThemeProvider>
  );

  return content;
};
export default Dashboard;
