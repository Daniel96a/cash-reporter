import { SELECTED_VIEW } from "../actions/types";
import { globalHistory } from "@reach/router";

const path = () => {
  const pathName = globalHistory.location.pathname
    .split("/")
    .filter((string) => string)
    .shift();
  return pathName;
};

const initialState = {
  selectedView: path(),
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
