import { SET_THEME, SET_THEME_NUMBER, ENABLE_THEME } from "../actions/types";

const savedTheme = () => {
  if (localStorage.theme === 'dark') {
    return 'dark'
  }
  if (localStorage.theme === 'light') {
    return 'light'
  }
  return null
};
const themeSwitchSave = () => {
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
};

const initialState = {
  theme: savedTheme(),
  themeNumber: themeNumber(),
  enableTheme: themeSwitchSave(),
};
export default (state = initialState, action = []) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    case ENABLE_THEME:
      return {
        ...state,
        theme: state.theme,
        themeNumber: state.themeNumber,
        enableTheme: !state.enableTheme
      };
    case SET_THEME_NUMBER:
      return {
        ...state,
        theme: state.theme,
        enableTheme: state.enableTheme,
        themeNumber: action.themeNumber
      };
    default:
      return state;
  }
};
