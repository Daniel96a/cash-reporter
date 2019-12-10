import React from "react";
import "./Profile.css";

export const Profile = props => {
  return (
    <div className="profile-div">
      <b>Name: {props.name}</b>
      <hr />
      <b>Status: {props.status}</b>
      <br />
      <div className="settings">
        <button href="/settings">Settings</button>
      </div>
    </div>
  );
};
