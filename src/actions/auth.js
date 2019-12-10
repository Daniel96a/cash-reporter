import * as types from "./types";
import axios from "axios";
import history from "../history";
const userLogin = (username, token, permission) => ({
  type: types.AUTH_LOGIN,
  username,
  token,
  permission
});
const customHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Content-Type": "application/json"
};

console.log(userLogin());

const userLogout = () => ({
  type: types.AUTH_LOGOUT
});

// const fakeLoginRequest = error =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       error === 200 ? resolve(error) : reject(error);
//     }, 1000)
//   );

export const doLogin = (username, password) => async dispatch => {
  console.log(username, password);
  const data = { username: username, password: password };
  axios
    .post("http://10.158.78.105:9091/login", data, {
      headers: customHeaders,
      timeout:1000
    })

    .then(res => {
      const resData = {
        username: res.data.username,
        token: res.data.token,
        permission: res.data.permission
      };
      dispatch(userLogin(resData.username, resData.token, resData.permission));
    })
    .catch(error => {
      dispatch(userLogin("ssdfasd", "asdfasfd", "sadfasd"));
      history.push("/");
      alert(error);
    });
};

export const doLogout = () => async dispatch => {
  dispatch(userLogout());
  history.push("/login")
};
