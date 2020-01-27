import { combineReducers } from "redux";
import auth from "./auth";
import employees from "./employees";
import customers from "./customers";
import reports from "./reports";
import states from "./states";



const rootReducer = combineReducers({
  auth,
  customers,
  employees,
  reports,
  states,
});

export default rootReducer;