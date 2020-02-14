import React, { useState } from "react";
import { TextField, RaisedButton } from "material-ui";
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
    <form
      className={loginFormStyle().root + " fade-in"}
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
      />
      <br />
      <RaisedButton label="Login" type="submit" onClick={login.bind(this)} />
    </form>
  );
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { doLogin })(LoginForm);
