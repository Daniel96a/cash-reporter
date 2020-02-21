import Cookies from "universal-cookie";
const cookie = new Cookies();
const refreshToken = cookie.get("refresh_token");
export const setGrantTypePassword = data => {
  return `grant_type=password&username=${data.username}&password=${data.password}`;
};
export const setGrantTypeRefreshToken = () => {
  return `grant_type=refresh_token&refresh_token=${refreshToken}&client_id=${"perham"}&client_secret=${"1234"}`;
};
