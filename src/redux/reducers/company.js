import { FETCH_COMPANY } from "../actions/types";

const initialState = {
  company: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPANY:
      return {
        ...state,
        company: action.company
      };
    default:
      return state;
  }
};
