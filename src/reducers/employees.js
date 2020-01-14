import {
  FETCH_EMPLOYEES,
  REMOVE_EMPLOYEE,
  ADD_EMPLOYEE
} from "../actions/types";

const initialState = {
  employees: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        employees: action.employees
      };
    case REMOVE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          employee => employee !== action.employee
        )
      };
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.concat(action.employee)
      };

    default:
      return state;
  }
};
