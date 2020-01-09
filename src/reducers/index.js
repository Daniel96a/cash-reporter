import { combineReducers } from "redux";
import auth from "./auth";
import employees from "./employees";
import customers from "./customers";
import reports from "./reports";


const rootReducer = combineReducers({
  auth,
  customers,
  employees,
  reports,
});

export default rootReducer;
