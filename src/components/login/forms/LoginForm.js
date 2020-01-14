import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    // document.getElementsByName("username")[0].focus();
  }, []);
  return (
    <form
      className={styles.root}
      onSubmit={e => {
        if (e.key === "Enter") {
          login.bind(this);
        }
      }}
    >
      <TextField
        fullWidth
        autoComplete="true"
        type="text"
        name="username"
        floatingLabelText="Enter username"
        inputStyle={{ color: "white" }}
        floatingLabelStyle={{ color: "lightgrey" }}
        hintStyle={{ color: "lightgrey" }}
        onChange={e => (data.username = e.target.value)}
        defaultValue={data.username}
        className="form-control"
      />
      <TextField
        fullWidth
        floatingLabelText="Enter password"
        type="password"
        inputStyle={{ color: "white" }}
        floatingLabelStyle={{ color: "lightgrey" }}
        hintStyle={{ color: "lightgrey" }}
        onChange={e => (data.password = e.target.value)}
        defaultValue={username.value}
      />
      <br />
      <RaisedButton label="Login" type="submit" onClick={login.bind(this)} />
    </form>
  );
};

export default LoginForm;
