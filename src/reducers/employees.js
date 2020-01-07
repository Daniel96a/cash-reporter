import { FETCH_EMPLOYEES } from "../actions/types";

const initialState = {
  employees: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {
        ...state, employees: action.employees
      };
    default:
      return state;
  }
};

