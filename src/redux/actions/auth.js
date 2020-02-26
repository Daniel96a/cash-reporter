import * as types from "./types";
import axios from "axios";
import { customHeaders } from "./customHeaders";
import {
  setGrantTypePassword,
  setGrantTypeRefreshToken
} from "../../utils/setGrantType";
import { setAuthorizationToken } from "../../utils/setAuthorizationToken";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const setCurrentUser = user => ({
  type: types.SET_CURRENT_USER,
  user
});

export const validateToken = () => {
  const accessToken = cookie.get("access_token");
  return async dispatch => {
    axios
      .post(`http://localhost:8080/oauth/check_token?token=${accessToken}`, {
        customHeaders,
        timeout: 1000
      })
      .then(res => {
        dispatch(setCurrentUser(res.data));
      })
      .catch(error => {
        cookie.remove("access_token");
      });
  };
};
export const refreshToken = () => {
  // var encodedData =
  //   "Basic " + base64.encode(`${data.username}:${data.password}`);
  return async dispatch => {
    axios
      .post("http://localhost:8080/oauth/token", setGrantTypeRefreshToken(), {
        headers: {
          Authorization: "Basic cGVyaGFtOjEyMzQ="
        },
        timeout: 1000
      })
      .then(res => {
        cookie.set("access_token", res.data.access_token, {
          maxAge: res.data.expires_in
        });
        cookie.set("refresh_token", res.data.refresh_token, {
          maxAge: res.data.expires_in
        });
        setAuthorizationToken(res);
        dispatch(setCurrentUser(res));
      })
      .catch(error => {
        dispatch(doLogout());
      });
  };
};

export const doLogin = data => {
  console.log(data)
  // var encodedData =
  //   "Basic " + base64.encode(`${data.username}:${data.password}`);
  return async dispatch => {
    axios
      .post("http://localhost:8080/oauth/token", setGrantTypePassword(data), {
        headers: {
          Authorization: "Basic cGVyaGFtOjEyMzQ="
        },
        timeout: 1000
      })
      .then(res => {
        cookie.set("access_token", res.data.access_token, {
          maxAge: res.data.expires_in
        });
        cookie.set("refresh_token", res.data.refresh_token, {
          maxAge: res.data.expires_in
        });

        setAuthorizationToken(res);
        dispatch(setCurrentUser(res));
      })
      .catch(error => {
        alert(error);
      });
  };
};
export const doLogout = () => {
  return async dispatch => {
    axios
      .get("http://localhost:8080/logout", {
        headers: customHeaders,
        timeout: 1000
      })
      .finally(() => {
        dispatch(setCurrentUser({}));
        cookie.remove("access_token");
        cookie.remove("refresh_token");
        window.location.reload();
      });
  };
};
