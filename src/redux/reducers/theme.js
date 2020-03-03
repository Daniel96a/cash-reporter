import { SET_THEME } from "../actions/types";

const savedTheme = () => {
  if (localStorage.theme === "dark") {
    localStorage.setItem("theme", 'dark')
    return "dark";
  } else {
    localStorage.setItem("theme", 'light')
    return "light";
  }
};
const initialState = {
  theme: savedTheme()
};
export default (state = initialState, action = []) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.theme
      };
    default:
      return state;
  }
};
