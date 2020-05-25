import axios from "axios";

export const setAuthorizationToken = token => {
  const token_type = token.data.token_type;
  
  const accessToken = token.data.access_token;

  if (token) {
    axios.defaults.headers.common["Authorization"] = `${token_type} ${accessToken}`;
  } else {
    delete axios.defaults.headers.common["access_token"];
  }
};
