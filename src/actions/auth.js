import * as types from "./types";
import axios from "axios";
import history from "../history";
import setAuthorizationToken from "../utils/setAuthorizationToken";

export const setCurrentUser = user => ({
  type: types.SET_CURRENT_USER,
  user
});
const customHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Content-Type": "application/json"
};
export const verifyToken = token => {
  return async dispatch => {
    return axios
      .post("http://10.158.78.105:9091/validate_token", token, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        return dispatch(res)
      })
      .catch(error => {
       return dispatch(error)
      });
  };
};
export const doLogin = data => {
  return async dispatch => {
    return axios
      .post("http://10.158.78.105:9091/login", data, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        dispatch(setCurrentUser(res.data.token));
        localStorage.setItem("jwtToken", res.data.token);
        setAuthorizationToken(res.data.token);
      })
      .catch(error => {
        dispatch(setCurrentUser("tokenValue"));
        setAuthorizationToken("tokenValue");
        localStorage.setItem("jwtToken", "tokenValue");

        history.push("/");
        alert(error);
      });
  };
};
export function doLogout() {
  return dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}
