import { SET_THEME } from "../actions/types";

const savedTheme = () => {
  if (localStorage.theme === "light") {
    localStorage.setItem("theme", 'light')
    return "light";
  } else {
    localStorage.setItem("theme", 'dark')
    return "dark";
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
