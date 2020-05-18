import * as types from "./types";
import axios from "axios";
import { useUrl } from "./URL";
import { API_ENDPOINTS } from "./endpoint-constants/api-endpoint.constants";
import { authorizationParams } from "../../utils/authorizationParams";

export const SET_EMPLOYEES = employees => ({
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
    .get(useUrl + API_ENDPOINTS.employee.all + authorizationParams)

      .then(res => {
        dispatch(SET_EMPLOYEES(res.data));
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
