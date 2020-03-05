import { SET_THEME } from "../actions/types";

const isDark = () => {
  if (localStorage.theme !== undefined) {
    return true
  }
  return false
};
const themeDisabled = () => {
  if (localStorage.theme === undefined) {
    return true
  }
  return false
};
const themeNumber = () => {
  if (localStorage.theme === 'dark') {
    return 1
  }
  if (localStorage.theme === 'light') {
    return 0
  }
  return 0
};

const initialState = {
  isDark: isDark(),
  themeNumber: themeNumber(),
  themeDisabled: themeDisabled(),
};

export default (state = initialState, action = []) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        isDark: action.theme.isDark,
        themeNumber: action.theme.themeNumber,
        themeDisabled: action.theme.themeDisabled
      };
    default:
      return state;
  }
};
