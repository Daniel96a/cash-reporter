import * as types from "./types";
import axios from "axios";
import { useUrl } from "./URL";
import Cookies from "universal-cookie";
import {
  setGrantTypePassword,
  setGrantTypeRefreshToken,
} from "../../utils/setGrantType";
import { setAuthorizationToken } from "../../utils/setAuthorizationToken";
// import { navigate } from "@reach/router";
import { authorizationParams } from "../../utils/authorizationParams";
import { SET_CUSTOMERS } from "./customers";
import { SET_EMPLOYEES } from "./employees";
import { SET_PERSON } from "./person";
import { setReports } from "./reports";
import { fetchCurrentUser } from "./user";
const cookie = new Cookies();
export const setCurrentUser = (user) => ({
  type: types.SET_CURRENT_USER,
  user,
});

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
        dispatch(fetchCurrentUser());
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
        console.log(res);
        cookie.set("access_token", res.data.access_token, {
          maxAge: res.data.expires_in,
        });
        cookie.set("refresh_token", res.data.refresh_token, {
          maxAge: res.data.expires_in,
        });
        setAuthorizationToken(res);
        dispatch(fetchCurrentUser());
        // navigate("/dashboard");
      })
      .catch((error) => {
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
        cookie.remove("access_token");
        cookie.remove("refresh_token");
      });
  };
};
