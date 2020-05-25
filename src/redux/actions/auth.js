import * as types from "./types";
import axios from "axios";
import { useUrl } from "./URL";
import { customHeaders } from "./customHeaders";
import Cookies from "universal-cookie";
import {
  setGrantTypePassword,
  setGrantTypeRefreshToken,
} from "../../utils/setGrantType";
import { setAuthorizationToken } from "../../utils/setAuthorizationToken";
import { navigate } from "@reach/router";
import { authorizationParams } from "../../utils/authorizationParams";
import { SET_CUSTOMERS } from "./customers";
import { SET_EMPLOYEES } from "./employees";
import { SET_PERSON } from "./person";
import { setReports } from "./reports";
const cookie = new Cookies();
export const setCurrentUser = (user) => ({
  type: types.SET_CURRENT_USER,
  user,
});

export const validateToken = () => {
  return async (dispatch) => {
    axios
      .post(`${useUrl}/oauth/check_token${authorizationParams}`, {
        customHeaders,
        timeout: 1000,
      })
      .then((res) => {
        dispatch(setCurrentUser(res.data));
      })
      .catch(() => {
        dispatch(setCurrentUser({}));
      });
  };
};

export const refreshToken = () => {
  return async (dispatch) => {
    axios
      .post(`${useUrl}/oauth/token`, setGrantTypeRefreshToken(), {
        headers: {
          Authorization: "Basic cGVyaGFtOjEyMzQ=",
        },
        timeout: 1000,
      })
      .then((res) => {
        cookie.set("access_token", res.data.access_token, {
          maxAge: res.data.expires_in,
        });
        cookie.set("refresh_token", res.data.refresh_token, {
          maxAge: res.data.expires_in,
        });
        setAuthorizationToken(res);
        dispatch(setCurrentUser(res.data.access_token));
      })
      .catch(() => {
        dispatch(setCurrentUser({}));
      });
  };
};

export const doLogin = (credentials) => {
  return async (dispatch) => {
    axios
      .post(`${useUrl}/oauth/token`, setGrantTypePassword(credentials), {
        headers: {
          Authorization: "Basic cGVyaGFtOjEyMzQ=",
        },
        timeout: 1000,
      })
      .then((res) => {
        cookie.set("access_token", res.data.access_token, {
          maxAge: res.data.expires_in,
        });
        cookie.set("refresh_token", res.data.refresh_token, {
          maxAge: res.data.expires_in,
        });
        setAuthorizationToken(res);
        dispatch(setCurrentUser(res.data.access_token));
        navigate("/dashboard");
      })
      .catch((error) => {
        dispatch(setCurrentUser({}));
        alert(error);
      });
  };
};
export const doLogout = () => {
  return async (dispatch) => {
    axios
      .get(`${useUrl}/oauth/logout${authorizationParams}`, {
        timeout: 1000,
      })
      .catch(() => {})
      .finally(() => {
        dispatch(setCurrentUser({}));
        dispatch(SET_CUSTOMERS({}));
        dispatch(SET_EMPLOYEES({}));
        dispatch(SET_PERSON({}));
        dispatch(setReports({}));
        sessionStorage.removeItem("appView");
        cookie.remove("access_token");
        cookie.remove("refresh_token");
      });
  };
};
