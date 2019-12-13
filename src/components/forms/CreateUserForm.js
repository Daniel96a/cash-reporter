import React, { useState } from "react";
import { customHeaders } from "../../actions/customHeaders";
import axios from "axios";
import { MuiThemeProvider } from "material-ui/styles";
import { TextField, RaisedButton } from "material-ui";
import { responseAlert } from "./ResponseAlert";

const CreateUserForm = props => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const data = {
    username: username.toLocaleLowerCase(),
    password: password
  };

  const createUser = e => {
    axios
      .post("http://localhost:9091/create_user", data, {
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
    e.preventDefault();
    setpassword("");
    setusername("");
    document.getElementsByName("username")[0].value = "";
    document.getElementsByName("password")[0].value = "";
    e.preventDefault();
  };

  return (
    <MuiThemeProvider>
      <div>
        <TextField
          hintText="Enter password here"
          floatingLabelText="Enter username"
          name="username"
          onChange={e => (data.username = e.target.value)}
          defaultValue={data.username}
        />
        <br />
        <TextField
          hintText="Enter password here"
          floatingLabelText="Enter password"
          name="password"
          type="Password"
          onChange={e => (data.password = e.target.value)}
          defaultValue={username.value}
        />
        <br />
        <RaisedButton label="Create user" onClick={createUser.bind(this)} />
      </div>
    </MuiThemeProvider>
  );
};
export default CreateUserForm;
