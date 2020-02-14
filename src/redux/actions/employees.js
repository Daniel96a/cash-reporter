import * as types from "./types";
import axios from "axios";
import { customHeaders } from "./customHeaders";
import { URL } from "./URLs";
import { doLogout } from "./auth";
import { Cookies } from "react-cookie";
const cookie = new Cookies();

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
    const token = {
      token: cookie.get("user")
    };
    axios
      .post(URL.localhost + "/employee/employeelist", token, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        dispatch(setEmployees(res.data.employeeList));
      })
      .catch(error => {
        dispatch(doLogout());
      });
  };
};

export const addEmployee = employee => {
  return async dispatch => {
    const data = {
      token: cookie.get("user"),
      employee: employee
    };
    axios
      .post(URL.localhost + "/employee/employee_add", data, {
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
    const data = {
      token: cookie.get("user"),
      employeeid: employee.id
    };
    axios
      .post(URL.localhost + "/employee/employee_remove", data, {
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
    const data = {
      token: cookie.get("user"),
      employee: employee
    };
    axios
      .post(URL.localhost + "/employee/employee_update", data, {
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
