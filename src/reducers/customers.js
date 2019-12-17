import { SET_CUSTOMER_LIST } from "../actions/types";

const initialState = {
  cusomer: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CUSTOMER_LIST:
      return {
        cusomer: action.customer
      };
    default:
      return state;
  }
};
