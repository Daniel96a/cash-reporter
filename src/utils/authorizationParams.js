import Cookies from "universal-cookie";
const cookie = new Cookies();
const access_token = cookie.get("access_token");

export const authorizationParams = `?access_token=${access_token}`;
