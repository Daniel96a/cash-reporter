import * as types from "./types";

export const SET_THEME = theme => ({
  type: types.SET_THEME,
  theme
});
export const ENABLE_THEME = enableTheme => ({
  type: types.ENABLE_THEME,
  enableTheme
});
export const SET_THEME_NUMBER = themeNumber => ({
  type: types.SET_THEME_NUMBER,
  themeNumber
});
export const chooseTheme = theme => {
  return async dispatch => {
    dispatch(SET_THEME(theme));
  };
};
export const enableTheme = enableTheme => {
  return async dispatch => {
    dispatch(ENABLE_THEME(enableTheme));
  };
};
export const themeNumber = themeNumber => {
  return async dispatch => {
    dispatch(SET_THEME_NUMBER(themeNumber));
  };
};

