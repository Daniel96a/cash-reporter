import React, { useState } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { TextField, RaisedButton } from "material-ui";
const LoginForm = props => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const data = {
    username: username.toLocaleLowerCase(),
    password: password
  };

  const login = e => {
    props.doLogin(data);
    setusername("");
    setpassword("");
    e.preventDefault();
  };
  return (
    <MuiThemeProvider>
      <div className="align-text-center form-width">
        <TextField
          hintText="Enter username here"
          fullWidth
          floatingLabelText="Enter username"
          onChange={e => (data.username = e.target.value)}
          defaultValue={data.username}
        />
        <br />
        <TextField
          fullWidth
          hintText="Enter password here"
          floatingLabelText="Enter password"
          type="Password"
          onChange={e => (data.password = e.target.value)}
          defaultValue={username.value}
        />
        <br />
        <RaisedButton label="Login" type="submit" onClick={login.bind(this)} />
      </div>
    </MuiThemeProvider>
  );
};

export default LoginForm;
