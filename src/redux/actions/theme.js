import * as types from "./types";

export const SET_THEME = theme => ({
  type: types.SET_THEME,
  theme
});
export const chooseTheme = theme => {
  return async dispatch => {
    dispatch(SET_THEME(theme));
  };
};


