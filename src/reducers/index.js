import { combineReducers } from "redux";
import auth from "./auth";
import employees from "./employees";
import customers from "./customers";

const rootReducer = combineReducers({
  auth,
  customers,
  employees
});

export default rootReducer;
