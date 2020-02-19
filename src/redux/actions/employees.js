import * as types from "./types";
import axios from "axios";
import { customHeaders } from "./customHeaders";
import { doLogout } from "./auth";

export const setEmployees = employees => ({
  type: types.FETCH_EMPLOYEES,
  employees
});

export const ADD_EMPLOYEE = employee => ({
  type: types.ADD_EMPLOYEE,
  employee
});
export const EDIT_EMPLOYEE = employee => ({
  type: types.EDIT_EMPLOYEE,
  employee
});
export const REMOVE_EMPLOYEE = employee => ({
  type: types.REMOVE_EMPLOYEE,
  employee
});

export const fetchEmployeeList = () => {
  return async dispatch => {
    axios
      .get("/employee", {
        timeout: 1000,
      })
      .then(res => {
        dispatch(setEmployees(res.data));
      })
      .catch(error => {
        dispatch(doLogout());
      });
  };
};

export const addEmployee = employee => {
  return async dispatch => {
    axios
      .post("/employee/employee_add", {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        employee.id = res.data.employeeid;
        dispatch(ADD_EMPLOYEE(employee));
      })
      .catch(error => {
        dispatch(doLogout());
      });
  };
};

export const deleteEmployee = employee => {
  return async dispatch => {
    axios
      .post("/employee/employee_remove", {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        dispatch(REMOVE_EMPLOYEE(employee));
      })
      .catch(error => {
        dispatch(doLogout());
      });
  };
};

export const updateEmployee = employee => {
  return async dispatch => {
    axios
      .post("/employee/employee_update", {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        dispatch(EDIT_EMPLOYEE(employee));
      })
      .catch(error => {
        dispatch(doLogout());
      });
  };
};
