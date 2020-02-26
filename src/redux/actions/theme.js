import * as types from "./types";

export const setTheme = isDark => ({
  type: types.TOGGLE_DARK_MODE,
  isDark
});
export const toggleDarkMode = isDark => {
  return async dispatch => {
    dispatch(setTheme(isDark));
  };
};
