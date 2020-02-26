import React, { useState } from "react";
import { TextField, Button, FormGroup } from "@material-ui/core";
import { loginFormStyle } from "../../../styles/Styles";
import { doLogin } from "../../../redux/actions/auth";
import { connect } from "react-redux";
import history from "../../../history";

const LoginForm = props => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const data = {
    username: username.toLocaleLowerCase(),
    password: password
  };

  const login = e => {
    props.doLogin(data);
    history.push("/");
    setusername("");
    setpassword("");
    e.preventDefault();
  };

  return (
    <FormGroup
      className={loginFormStyle().root + " fade-in"}
      onSubmit={e => {
        if (e.key === "Enter") {
          login.bind(this);
        }
      }}
    >
      <FormGroup className={loginFormStyle().label}>
        <TextField
          label="Username"
          name="username"
          autoComplete="current-username"
          onChange={e => setusername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={e => setpassword(e.target.value)}
        />
      </FormGroup>
      <br />
      <Button
        variant="contained"
        label="Login"
        type="submit"
        onClick={login.bind(this)}
      >
        Login
      </Button>
    </FormGroup>
  );
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { doLogin })(LoginForm);
