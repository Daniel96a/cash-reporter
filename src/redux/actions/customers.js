import * as types from "./types";
import axios from "axios";
import { useUrl } from "./URL";
import { authorizationParams } from "../../utils/authorizationParams";
import { API_ENDPOINTS } from "./endpoint-constants/api-endpoint.constants";

export const SET_CUSTOMERS = (customers) => ({
  type: types.FETCH_CUSTOMERS,
  customers: customers,
});

export const REMOVE_CUSTOMER = (customer) => ({
  type: types.REMOVE_CUSTOMER,
  customer,
});
export const EDIT_CUSTOMER = (customer) => ({
  type: types.EDIT_CUSTOMER,
  customer,
});
export const ADD_CUSTOMER = (customer) => ({
  type: types.ADD_CUSTOMER,
  customer,
});

export const fetchCustomerList = () => {
  return async (dispatch) => {
    axios
      .get(useUrl + API_ENDPOINTS.customer.all + authorizationParams)
      .then((res) => {
        dispatch(SET_CUSTOMERS(res.data));
      })
      .catch((error) => {});
  };
};

export const addCustomer = (person) => {
  return async (dispatch) => {
    dispatch(ADD_CUSTOMER(person));
  };
};

export const deleteCustomer = (customer) => {
  return async (dispatch) => {
    dispatch(REMOVE_CUSTOMER(customer));
  };
};

export const updateCustomer = (customer) => {
  return async (dispatch) => {
    dispatch(EDIT_CUSTOMER(customer));
  };
};
