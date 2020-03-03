import { SET_CURRENT_USER } from "../actions/types";
import isEmpty from "lodash/isEmpty";
import Cookies from "universal-cookie";
const cookie = new Cookies();

const initialState = {
  isAuthenticated: false,
  user: cookie.get("access_token")
};

export default (state = initialState, action = []) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    default:
      return state;
  }
};
