import { FETCH_CUSTOMERS } from "../actions/types";

const initialState = {
  customers: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      return {
        ...state, customers: action.customers
      };
    default:
      return state;
  }
};

