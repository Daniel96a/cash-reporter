import React, {useState} from "react";

import '../../login/LoginForm.css'
import axios from "axios";
import {responseAlert} from "../../login/ResponseAlert";

const CreateUser = props => {
    
  const [uName, setuName] = useState("");
  const [pwd, setpwd] = useState("");
  const data = {
    username: uName.toLocaleLowerCase(),
    password: pwd
  };
  const customHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json"
  };

  const createUser = e => {
    if (
      (data.username.length > 5 && data.username.length < 50) ||
      (data.password.length > 7 && data.password.length < 50)
    ) {
      axios
        .post("http://10.158.78.105:9091/create_user", data, {
          headers: customHeaders
        })
        .then(res => {
          return responseAlert(res);
        })
        .catch(err => {
          if (err.res === undefined) {
            return responseAlert(err);
          } else {
            return responseAlert(err.response.data);
          }
        });
    } else {
      alert("Invalid username or password");
    }
    setpwd("");
    setuName("");
    document.getElementsByName("username")[0].value = "";
    document.getElementsByName("password")[0].value = "";
    e.preventDefault();
  };

  return (
    <div className="form-div">
      <form>
        <p>Create User</p>
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
        <button className="create-user" onClick={createUser.bind(this)}>Create User</button>
      </form>
    </div>
  );
};
export default CreateUser;
