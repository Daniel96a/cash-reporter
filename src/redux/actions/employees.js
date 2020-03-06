import * as types from "./types";
import axios from "axios";
import Cookies from "universal-cookie";
import { useUrl } from "./URL";
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
      .get(
        `${useUrl}/employee?access_token=${cookie.get(
          "access_token"
        )}`
      )
      .then(res => {
        dispatch(setEmployees(res.data));
      })
      .catch(error => { });
  };
};

export const addEmployee = employee => {
  return async dispatch => {
    dispatch(ADD_EMPLOYEE(employee));
  };
};

export const deleteEmployee = employee => {
  return async dispatch => {
    dispatch(REMOVE_EMPLOYEE(employee));
  };
};

export const updateEmployee = employee => {
  return async dispatch => {
    dispatch(EDIT_EMPLOYEE(employee));

  };
};
