import { FETCH_REPORTS, ADD_REPORT } from "../actions/types";

const initialState = {
  reports: [],
  report: {
    employeesign: 2,
    revenue: "",
    customersign: "",
    digitalcashflow: "",
    cashflow: "",
    location: "",
    payment: "",
    infofield: "",
    tablename: "",
    status: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPORTS:
      return {
        ...state,
        reports: action.reports,
      };
    case ADD_REPORT:
      return {
        ...state,
        report: action.addReport,
      };
    default:
      return state;
  }
};
