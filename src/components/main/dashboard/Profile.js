import React from "react";
import "./Profile.css";
import { Card } from "material-ui/Card";
import SettingsIcon from "@material-ui/icons/Settings";
import { MuiThemeProvider } from "material-ui/styles";
import { Button } from "@material-ui/core";
import { GREY, DARK } from "../../../colorTheme/colors";

export const Profile = props => {
  return (
    <MuiThemeProvider>
      <div className="profile-div">
        <Card style={{backgroundColor: GREY, color: "white"}}>
          <Button
            aria-label="Edit and Delete"
            color="primary"
            style={{
              margin: "auto",
              border: 0,
              borderRadius: 50,
              height: 50,
              width: 50,
              position: "absolute",
              float: "right",
              top: 0,
              right: 0
            }}
          >
            <SettingsIcon />

          </Button>
          <div className="card-div">
            <b>Name: {props.name}</b>
            <hr color={DARK}/>
            <b>Status: {props.status}</b>
          </div>
        </Card>
      </div>
    </MuiThemeProvider>
  );
};
