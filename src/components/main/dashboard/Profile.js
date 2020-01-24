import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Card } from "material-ui/Card";
import SettingsIcon from "@material-ui/icons/Settings";
import { MuiThemeProvider } from "material-ui/styles";
import { Button } from "@material-ui/core";
import { GREY } from "../../../colorTheme/colors";
import { connect } from "react-redux";

const Profile = props => {
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(props.user);
  }, [props]);
  return (
    <MuiThemeProvider>
      <div className="profile-div">
        <Card style={{ backgroundColor: GREY, color: "white" }}>
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
            <b>Name: {user.username}</b>
            <hr color={""} />
            <b>Status: {user.permission}</b>
          </div>
        </Card>
      </div>
    </MuiThemeProvider>
  );
};
const mapStateToProps = state => ({
  user: state.auth.user
});
export default connect(mapStateToProps)(Profile);
