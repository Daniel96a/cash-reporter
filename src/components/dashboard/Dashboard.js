import React, { useState } from "react";
import {Profile} from "./profile/Profile";
import CreateUser from './profile/CreateUser'

const Dashboard = props => {
  const [profileName] = useState("Daniel");
  const [profilStatus] = useState("Admin");

  const content = (
    <React.Fragment>
      <Profile name={profileName} status={profilStatus} />
      <CreateUser />
    </React.Fragment>
  );

  return content;
};
export default Dashboard;

