import { SET_CUSTOMER_LIST, ADD_CUSTOMER_TO_LIST } from "../actions/types";

const initialState = {
  customers: null
};

export default (state = initialState, action = null) => {
  switch (action.type) {
    case SET_CUSTOMER_LIST:
      return {
        customers: action.customers
      };
      case ADD_CUSTOMER_TO_LIST:
        return {
          ...state,
          customers: [...state.customers, action.addCustomer]
        }
    default:
      return state;
  }
};

