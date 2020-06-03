import axios from "axios";
import { useUrl } from "./URL";
import { authorizationParams } from "../../utils/authorizationParams";
import { setCurrentUser } from "./auth";
import { Cookies } from "react-cookie";

const cookie = new Cookies();
export const fetchCurrentUser = () => {
  return async (dispatch) => {
    axios
      .get(`${useUrl}/user${authorizationParams}`)
      .then((res) => {
        dispatch(
          setCurrentUser({ username: res.data.USER, role: res.data.ROLE })
        );
      })
      .catch(() => {
        dispatch(setCurrentUser({}));
        cookie.remove("access_token");
        cookie.remove("refresh_token");
      });
  };
};
