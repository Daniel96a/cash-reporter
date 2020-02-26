import { combineReducers } from "redux";
import auth from "./auth";
import employees from "./employees";
import customers from "./customers";
import reports from "./reports";
import states from "./states";
import theme from "./theme";

const rootReducer = combineReducers({
  auth,
  customers,
  employees,
  reports,
  states,
  theme
});

export default rootReducer;
