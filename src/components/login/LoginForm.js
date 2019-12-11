import React, { useState } from "react";
import "./LoginForm.css";
const LoginForm = props => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const data = {
    username: username.toLocaleLowerCase(),
    password: password
  };

  const login = e => {
    const data = { username: username, password: password };
    props.doLogin(data);
    document.getElementsByName("username")[0].value = "";
    document.getElementsByName("password")[0].value = "";
    setusername("");
    setpassword("");
    e.preventDefault();
  };

  return (
    <div className="form-div">
      <form>
        <p>Sign in</p>
        <hr />
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          onChange={e => (data.username = e.target.value)}
          type="text"
          autoFocus={true}
          placeholder="Enter username"
          name="username"
          required
        ></input>
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          onChange={e => (data.password = e.target.value)}
          type="password"
          placeholder="Enter password"
          name="password"
          required
        ></input>
        <button onClick={login.bind(this)}>Login</button>
      </form>
    </div>
  );
};
LoginForm.propTypes = {
  // login: React.PropTypes.func.isRequired,
  // data: React.PropTypes.object.isRequired
};

LoginForm.contextTypes = {
  // router: React.PropTypes.object.isRequired
};

export default LoginForm
