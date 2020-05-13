import React, { useState } from "react";
import { TextField, Button, FormGroup } from "@material-ui/core";
import { loginFormStyle } from "../../../styles/Styles";
import { doLogin } from "../../../redux/actions/auth";
import { connect } from "react-redux";

const LoginForm = ({ doLogin }) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const passwordRef = React.createRef();
  const data = {
    username: username.toLocaleLowerCase(),
    password: password,
  };

  const login = () => {
    doLogin(data);
  };

  return (
    <form className={loginFormStyle().root + " fade-in"}>
      <FormGroup className={loginFormStyle().label}>
        <TextField
          label="Username"
          name="username"
          autoComplete="current-username"

          onChange={(e) => setusername(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              passwordRef.current.focus();
            }
          }}
        />
        <TextField
          label="Password"
          type="password"
          inputRef={passwordRef}
          // autoComplete="current-password"
          onChange={(e) => setpassword(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              login(e);
              
            }
          }}
        />
      </FormGroup>
      <br />
      <Button variant="contained" label="Login" onClick={login.bind(this)}>
        Login
      </Button>
    </form>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { doLogin })(LoginForm);
