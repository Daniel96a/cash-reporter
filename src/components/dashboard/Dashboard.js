import React from "react";
import { Profile } from "./profile/Profile";
import DashboardHeader from "../header/DashboardHeader";
import CreateUserForm from "../forms/CreateUserForm";
import { MuiThemeProvider } from "material-ui/styles";

const Dashboard = props => {
  const content = (
    <MuiThemeProvider>
      <React.Fragment>
        <DashboardHeader doLogout={props.doLogout} auth={props.auth} />
        <Profile
          name={props.auth.user.username}
          status={props.auth.user.permission}
        />

        <CreateUserForm />
      </React.Fragment>
    </MuiThemeProvider>
  );

  return content;
};
export default Dashboard;
