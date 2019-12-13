import * as types from "./types";
import axios from "axios";
import history from "../history";
import { customHeaders } from "./customHeaders";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import {URL} from "./URLs";

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
      .post(URL.localhost9091 + "validate_token", token, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        setAuthorizationToken(res.data.token);
        dispatch(setCurrentUser(res.data));
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
        dispatch(doLogout());
      });
  };
};
export const doLogin = data => {
  return async dispatch => {
    axios
      .post(URL.localhost9091 + "login", data, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        setAuthorizationToken(res.data.token);
        dispatch(setCurrentUser(res.data));
        console.log(res.data);
        history.push("/");
      })
      .catch(error => {
        alert(error);
      });
  };
};
export function doLogout() {
  return async dispatch => {
    localStorage.removeItem("token");
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}
