import * as types from "./types";
import axios from "axios";
import { customHeaders } from "./customHeaders";
import { URL } from "./URLs";

export const setEmployees = employees => ({
  type: types.FETCH_EMPLOYEES,
  employees
});

export const fetchEmployeeList = () => {
  return async dispatch => {
    const token = {
      token: localStorage.token
    };
    axios
      .post(URL.localhost9091 + "employee/employeelist", token, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        console.log(res.data.employeeList);
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
    console.log(data);
    axios
      .post(URL.localhost9091 + "employee/employee_add", data, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        dispatch(fetchEmployeeList());
        console.log(
          "Added employee with response: " + JSON.stringify(res.data)
        );
      })
      .catch(error => {
        alert(error);
      });
  };
};

export const removeEmployee = token => {
  return async dispatch => {
    token = {
      token: token
    };
    axios
      .post(URL.localhost9091 + "employee/employeelist", token, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        console.log(res.data);
        dispatch(setEmployees(res.data));
      })
      .catch(error => {
        alert(error);
      });
  };
};

export const updateEmployee = token => {
  return async dispatch => {
    token = {
      token: token
    };
    axios
      .post(URL.localhost9091 + "employee/employeelist", token, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        console.log(res.data);
        dispatch(setEmployees(res.data));
      })
      .catch(error => {
        alert(error);
      });
  };
};
