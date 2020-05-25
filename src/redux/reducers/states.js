import {
  SELECTED_VIEW,
  SHOW_ADD_CUSTOMER,
  SHOW_ADD_EMPLOYEE,
  SHOW_ADD_REPORT,
  SHOW_LIST,
} from "../actions/types";

const initialState = {
  selectedView: "dashboard",
  showAddEmployee: false,
  showAddCustomer: false,
  showAddReport: false,
  showList: "customers",
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECTED_VIEW:
      return {
        ...state,
        selectedView: action.selectedView,
      };
    case SHOW_ADD_CUSTOMER:
      return {
        ...state,
        showAddCustomer: action.showAddCustomer,
      };
    case SHOW_ADD_EMPLOYEE:
      return {
        ...state,
        showAddEmployee: action.showAddEmployee,
      };
    case SHOW_ADD_REPORT:
      return {
        ...state,
        showAddReport: action.showAddReport,
      };
    case SHOW_LIST:
      console.log(action.showList === 0 ? "customers" : "employees");
      return {
        ...state,
        showList: action.showList === 0 ? "customers" : "employees",
      };
    default:
      return state;
  }
};
