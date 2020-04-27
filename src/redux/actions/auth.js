import * as types from "./types";
import axios from "axios";
import { useUrl } from "./URL";
import { customHeaders } from "./customHeaders";
import {
  setGrantTypePassword,
  setGrantTypeRefreshToken,
} from "../../utils/setGrantType";
import { setAuthorizationToken } from "../../utils/setAuthorizationToken";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const setCurrentUser = (user) => ({
  type: types.SET_CURRENT_USER,
  user,
});

export const validateToken = () => {
  const accessToken = cookie.get("access_token");
  return async (dispatch) => {
    axios
      .post(`${useUrl}/oauth/check_token?token=${accessToken}`, {
        customHeaders,
        timeout: 1000,
      })
      .then((res) => {
        dispatch(setCurrentUser(res.data));
      })
      .catch((error) => {
        cookie.remove("access_token");
      });
  };
};

export const refreshToken = () => {
  // var encodedData =
  //   "Basic " + base64.encode(`${data.username}:${data.password}`);
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
      });
  };
};

export const doLogin = (data) => {
  // var encodedData =
  //   "Basic " + base64.encode(`${data.username}:${data.password}`);
  return async (dispatch) => {
    axios
      .post(`${useUrl}/oauth/token`, setGrantTypePassword(data), {
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
      .catch((error) => {
        alert(error);
      });
  };
};
export const doLogout = () => {
  const accessToken = cookie.get("access_token");
  return async (dispatch) => {
    axios
      .get(`${useUrl}/oauth/logout?access_token=${accessToken}`, {
        timeout: 1000,
      })
      .finally(() => {
        dispatch(setCurrentUser({}));
        sessionStorage.removeItem("appView");
        cookie.remove("access_token");
        cookie.remove("refresh_token");
      });
  };
};
