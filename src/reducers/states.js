import { SELECTED_VIEW } from "../actions/types";

const savedSession = () => {
  let savedSession = "Dashboard";
  if (sessionStorage.appView) {
    savedSession = sessionStorage.getItem("appView");
  }
  return savedSession;
};
const initialState = {
  selectedView: savedSession()
};

export default (state = initialState, action = []) => {
  switch (action.type) {
    case SELECTED_VIEW:
      return {
        selectedView: action.selectedView
      };
    default:
      return state;
  }
};
