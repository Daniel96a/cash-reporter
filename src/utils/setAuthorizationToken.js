import axios from "axios";

export const setAuthorizationToken = token => {
  const accessToken = token.data.access_token;
  if (token) {
    axios.defaults.headers.common["access_token"] = `${accessToken}`;
  } else {
    delete axios.defaults.headers.common["access_token"];
  }
};
