import React from "react";
import "./Profile.css";
import { Card } from "material-ui/Card";
import SettingsIcon from "@material-ui/icons/Settings";
import { MuiThemeProvider } from "material-ui/styles";

export const Profile = props => {
  return (
    <MuiThemeProvider>
      <div className="profile-div">
        <Card>
          <a className="settings" href="#settings">
            <SettingsIcon href="/edit_profile" type="link" />
          </a>
          <div className="card-div">
            <b>Name: {props.name}</b>
            <hr />
            <b>Status: {props.status}</b>
          </div>
        </Card>
      </div>
    </MuiThemeProvider>
  );
};
