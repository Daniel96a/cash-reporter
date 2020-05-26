import React, { useState } from "react";
import { TextField, Button, FormGroup } from "@material-ui/core";
import { loginFormStyle } from "../../styles/Styles";
import { doLogin } from "../../redux/actions/auth";
import { connect } from "react-redux";

const LoginForm = ({ doLogin }) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const passwordRef = React.createRef();
  const data = {
    username: username.toLocaleLowerCase(),
    password: password,
  };

  const login = (e) => {
    e.preventDefault();
    doLogin(data);
  };

  return (
    <form className={loginFormStyle().root + " fade-in"} onSubmit={login}>
      <FormGroup className={loginFormStyle().label}>
        <TextField
          label="Username"
          name="username"
          autoComplete="current-username"
          required={true}
          onChange={(e) => setusername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          inputRef={passwordRef}
          required={true}
          // autoComplete="current-password"
          onChange={(e) => setpassword(e.target.value)}
        />
      </FormGroup>
      <Button variant="contained" label="Login" type="submit">
        Login
      </Button>
    </form>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { doLogin })(LoginForm);
