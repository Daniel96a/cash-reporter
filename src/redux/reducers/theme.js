import { TOGGLE_DARK_MODE } from "../actions/types";

const savedTheme = () => {
  if (localStorage.isDark === "true") {
    return true;
  } else {
    return false;
  }
};
const initialState = {
  isDark: savedTheme()
};
export default (state = initialState, action = []) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        isDark: action.isDark
      };
    default:
      return state;
  }
};
