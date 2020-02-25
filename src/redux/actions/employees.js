import * as types from "./types";
import axios from "axios";
import { customHeaders } from "./customHeaders";
import { doLogout } from "./auth";
import Cookies from "universal-cookie";
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
    axios
      .get(`http://192.168.1.131:8080/customer?access_token=${cookie.get("access_token")}`)
      .then(res => {
        dispatch(setEmployees(res.data));
      })
      .catch(error => {});
  };
};

export const addEmployee = employee => {
  return async dispatch => {
    axios
      .post("http://192.168.1.131:8080/employee/employee_add", {
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
      .post("http://192.168.1.131:8080/employee/employee_remove", {
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
      .post("http://192.168.1.131:8080/employee/employee_update", {
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
