import {
  FETCH_CUSTOMERS,
  REMOVE_CUSTOMER,
  ADD_CUSTOMER
} from "../actions/types";

const initialState = {
  customers: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      return {
        ...state,
        customers: action.customers
      };
    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          customer => customer !== action.customer
        )
      };
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: state.customers.concat(action.customer)
      };

    default:
      return state;
  }
};
