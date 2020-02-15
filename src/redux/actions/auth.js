import * as types from "./types";
import axios from "axios";
import { customHeaders } from "./customHeaders";
import { URL } from "./URLs";
import history from "../../history";
import { Cookies } from "react-cookie";
// import { setAuthorizationToken } from "../../utils/setAuthorizationToken";

const cookie = new Cookies();
const date = new Date(Date.now() + 6000000);
console.log(date);
export const setCurrentUser = user => ({
  type: types.SET_CURRENT_USER,
  user
});

export const verifyToken = token => {
  return async dispatch => {
    token = {
      token: token
    };
    axios
      .post(URL.localhost + "/validate_token", token, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        dispatch(setCurrentUser(res.data));
        cookie.set("user", cookie.get("user"), {
          path: "/",
          expires: date
        });
      })
      .catch(error => {
        cookie.remove("user");
        alert(error + "\n Please login to proceed");
        history.push("/login");
      });
  };
};

export const doLogin = data => {

  return async dispatch => {
    axios
      .post(
        "/login",
          data,
        {
          headers: { customHeaders, authorization: "Basic Z2d5ZjpkZmdkdA==" },
          timeout: 1000
        }
      )
      .then(res => {
        cookie.set("user", res.data.token, {
          path: "/",
          expires: date
        });
        sessionStorage.setItem(
          "user",
          `username= ${res.data.username}, permission= ${res.data.permission}`
        );
        dispatch(setCurrentUser(res.data));
      })
      .catch(error => {
        alert(error);
      });
  };
};
export const doLogout = () => {
  return async dispatch => {
    const token = {
      token: cookie.get("user")
    };
    axios
      .post(URL.localhost + "/logout", token, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(() => {
        cookie.remove("user");
        sessionStorage.clear();
        history.push("/login");
        dispatch(setCurrentUser({}));
      })
      .catch(() => {
        history.push("/login");
        sessionStorage.clear();
        cookie.remove("user");
        dispatch(setCurrentUser({}));
      });
  };
};
