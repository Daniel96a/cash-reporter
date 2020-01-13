import React, { useState } from "react";
import { TextField, RaisedButton } from "material-ui";
import { loginFormStyle } from "../../../styles/Styles";
const LoginForm = props => {
  const styles = loginFormStyle();
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
        <div className ={styles.root}>
        <TextField
          hintText="Enter username here"
          fullWidth
          floatingLabelText="Enter username"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          
          onChange={e => (data.username = e.target.value)}
          defaultValue={data.username}
          />
        <br />
        <TextField
          fullWidth
          hintText="Enter password here"
          floatingLabelText="Enter password"
          type="Password"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => (data.password = e.target.value)}
          defaultValue={username.value}
          />
        <br />
        <RaisedButton label="Login" type="submit" onClick={login.bind(this)} />
      </div>
  );
};

export default LoginForm;
