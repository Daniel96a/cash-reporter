import * as types from "./types";
import axios from "axios";
import { customHeaders } from "./customHeaders";
import history from "../../history";

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
  const formData = new FormData();
  formData.append("username", data.username);
  formData.append("password", data.password);

  return async dispatch => {
    axios
      .post("/login", formData, {
        timeout: 1000
      })
      .then(res => {
        console.log(res);
        sessionStorage.setItem("loggedin",res.data);
        dispatch(setCurrentUser(res.data));
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
        dispatch(setCurrentUser({}));
        sessionStorage.clear()

      })
      .catch(() => {
        dispatch(setCurrentUser({}));
        sessionStorage.clear();
      });
  };
};
