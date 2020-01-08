import React from "react";
import "./Profile.css";
import { Card } from "material-ui/Card";
import SettingsIcon from "@material-ui/icons/Settings";
import { MuiThemeProvider } from "material-ui/styles";
import { Button } from "@material-ui/core";

import { BLUE } from "../../../colorTheme/colors";

export const Profile = props => {
  return (
    <MuiThemeProvider>
      <div className="profile-div">
        <Card>
          <Button
            aria-label="Edit and Delete"
            color="primary"
            style={{
              border: 0,
              borderRadius: 50,
              
              height: 50,
              width: 50,
              position: "absolute",
              top: 0,
              right: 0
            }}
          >
            <SettingsIcon
              style={{

              }}
            />
          </Button>

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
