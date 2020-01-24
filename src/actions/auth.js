import * as types from "./types";
import axios from "axios";
import { customHeaders } from "./customHeaders";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import { URL } from "./URLs";
import history from "../history";
// import { fetchCustomerList } from "./customers";
// import { fetchEmployeeList } from "./employees";
// import { fetchReportList } from "./reports";

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
        setAuthorizationToken(res.data.token);
        dispatch(setCurrentUser(res.data));
      })
      .catch(error => {
        alert(error + "\n Please login to proceed");
        dispatch(doLogout());
      });
  };
};

export const doLogin = data => {
  return async dispatch => {
    axios
      .post(URL.localhost + "/login", data, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        setAuthorizationToken(res.data.token);
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
      token: localStorage.token
    };
    axios
      .post(URL.localhost + "/logout", token, {
        headers: customHeaders,
        timeout: 1000
      })
      .finally(() => {
        localStorage.removeItem("token");
        history.push("/login");
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
      });
  };
};
