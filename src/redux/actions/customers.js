import * as types from "./types";
import axios from "axios";
import { customHeaders } from "./customHeaders";
import { doLogout } from "./auth";

export const SET_CUSTOMERS = customers => ({
  type: types.FETCH_CUSTOMERS,
  customers: customers
});

export const REMOVE_CUSTOMER = customer => ({
  type: types.REMOVE_CUSTOMER,
  customer
});
export const EDIT_CUSTOMER = customer => ({
  type: types.EDIT_CUSTOMER,
  customer
});
export const ADD_CUSTOMER = customer => ({
  type: types.ADD_CUSTOMER,
  customer
});

export const fetchCustomerList = () => {
  return async dispatch => {
    axios
      .get("/customer", {
        timeout: 1000
      })
      .then(res => {
        console.log(res.data);
        dispatch(SET_CUSTOMERS(res.data));
      })
      .catch(error => {
        dispatch(doLogout());
      });
  };
};

export const addCustomer = customer => {
  return async dispatch => {
    axios
      .post("/customer/customer_add", customer, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        customer.id = res.data.id;
        dispatch(ADD_CUSTOMER(customer));
      });
  };
};

export const deleteCustomer = customer => {
  return async dispatch => {
    axios
      .post("/customer/customer_remove", customer.id, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(() => {
        dispatch(REMOVE_CUSTOMER(customer));
      });
  };
};

export const updateCustomer = customer => {
  return async dispatch => {

    axios
      .post("/customer/customer_update", customer, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        dispatch(EDIT_CUSTOMER(customer));
      })
      .catch(error => {
        dispatch(doLogout());
      });
  };
};
