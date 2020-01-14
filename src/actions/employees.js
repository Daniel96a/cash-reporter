import * as types from "./types";
import axios from "axios";
import { customHeaders } from "./customHeaders";
import { URL } from "./URLs";

export const setEmployees = employees => ({
  type: types.FETCH_EMPLOYEES,
  employees
});

export const ADD_EMPLOYEE = employee => ({
  type: types.ADD_EMPLOYEE,
  employee
});

export const REMOVE_EMPLOYEE = employee => ({
  type: types.REMOVE_EMPLOYEE,
  employee
});

export const fetchEmployeeList = () => {
  return async dispatch => {
    const token = {
      token: localStorage.token
    };
    axios
      .post(URL.localhost + "/employee/employeelist", token, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        console.log(res.data.employeeList)
        dispatch(setEmployees(res.data.employeeList));
      })
      .catch(error => {
        alert(error);
      });
  };
};

export const addEmployee = employee => {
  return async dispatch => {
    const data = {
      token: localStorage.token,
      employee: employee
    };
    axios
      .post(URL.localhost + "/employee/employee_add", data, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        employee.id = res.data.employeeid;
        console.log(employee);
        dispatch(ADD_EMPLOYEE(employee));
      })
      .catch(error => {
        alert(error);
      });
  };
};

export const deleteEmployee = employee => {
  return async dispatch => {
    const data = {
      token: localStorage.token,
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
        alert(error);
      });
  };
};

export const updateEmployee = employee => {
  return async dispatch => {
    const data = {
      token: localStorage.token,
      employee: employee
    };
    axios
      .post(URL.localhost + "/employee/employee_update", data, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        dispatch(fetchEmployeeList(res.data));
      })
      .catch(error => {
        alert(error);
      });
  };
};
