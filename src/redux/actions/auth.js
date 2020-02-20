import * as types from "./types";
import axios from "axios";
import { customHeaders } from "./customHeaders";
import history from "../../history";
import base64 from "base-64";
import { setGrantTypePassword } from "../../utils/setGrantType";
import { setAuthorizationToken } from "../../utils/setAuthorizationToken";

export const setCurrentUser = user => ({
  type: types.SET_CURRENT_USER,
  user
});

export const verifyToken = token => {
  return async dispatch => {
    axios
      .post("/", {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        dispatch(setCurrentUser(res.data));
      })
      .catch(error => {
        alert(error + "\n Please login to proceed");
        history.push("/login");
      });
  };
};

export const doLogin = data => {
  var encodedData =
    "Basic " + base64.encode(`${data.username}:${data.password}`);
  console.log(base64.decode("cGVyaGFtOjEyMzQ="));
  console.log(encodedData);
  return async dispatch => {
    axios
      .post("/oauth/token", setGrantTypePassword(data), {
        headers: {
          // "Content-Type": "application/x-www-form-urlencoded",
          customHeaders,
          // refresh_token: `bearer ${axios.defaults.headers.common["access_token"]}`,
          
          Authorization: "Basic cGVyaGFtOjEyMzQ="
        },
        timeout: 1000
      })
      .then(token => {
        console.log(token);
        setAuthorizationToken(token);
        // sessionStorage.setItem("loggedin", res.data);
        dispatch(setCurrentUser(token));
      })
      .catch(error => {
        alert(error);
      });
  };
};
export const doLogout = () => {
  return async dispatch => {
    axios
      .get("/logout", {
        headers: customHeaders,
        timeout: 1000
      })
      .then(() => {
        history.push("/login");
        dispatch(setCurrentUser({}));
        sessionStorage.clear();
      })
      .catch(() => {
        dispatch(setCurrentUser({}));
        history.push("/login");
        sessionStorage.clear();
      });
  };
};
