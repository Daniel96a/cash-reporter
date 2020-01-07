import React, { useState } from "react";

import { MuiThemeProvider } from "material-ui/styles";
import { TextField, RaisedButton } from "material-ui";

const CreateUserForm = props => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const data = {
    username: username.toLocaleLowerCase(),
    password: password
  };

  const createCustomer = e => {
    props.addCustomer(data);
    setusername("");
    setpassword("");
    e.preventDefault();
  };

  return (
    <MuiThemeProvider>
      <div className="align-text-center form-width">
        <TextField
          hintText="Enter password here"
          floatingLabelText="Enter username"
          name="username"
          fullWidth
          onChange={e => (data.username = e.target.value)}
          defaultValue={data.username}
        />
        <br />
        <TextField
          hintText="Enter password here"
          floatingLabelText="Enter password"
          name="password"
          type="Password"
          fullWidth
          onChange={e => (data.password = e.target.value)}
          defaultValue={username.value}
        />
        <br />
        <RaisedButton label="Create user" onClick={createCustomer.bind(this)} />
      </div>
    </MuiThemeProvider>
  );
};



export default CreateUserForm;
