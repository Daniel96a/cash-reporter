import * as types from "./types";

export const setSelectedView = selectedView => ({
  type: types.SELECTED_VIEW,
  selectedView
});

export const changeView = selectedView => {
  return async dispatch => {
    dispatch(setSelectedView(selectedView));
    sessionStorage.setItem("appView", selectedView);
  };
};
