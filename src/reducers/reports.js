import { FETCH_REPORTS } from "../actions/types";

const initialState = {
  reports: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPORTS:
      return {
        ...state, reports: action.reports
      };
    default:
      return state;
  }
};

