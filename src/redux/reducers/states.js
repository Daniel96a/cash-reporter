import { SELECTED_VIEW } from "../actions/types";

let route = window.location.pathname
  .split("/")
  .filter((string) => string)
  .shift();

const initialState = {
  selectedView: route,
};

export default (state = initialState, action = []) => {
  switch (action.type) {
    case SELECTED_VIEW:
      return {
        selectedView: action.selectedView,
      };
    default:
      return state;
  }
};
