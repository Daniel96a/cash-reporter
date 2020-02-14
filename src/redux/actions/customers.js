import * as types from "./types";
import axios from "axios";
import { customHeaders } from "./customHeaders";
import { URL } from "./URLs";
import { doLogout } from "./auth";
import { Cookies } from "react-cookie";
const cookie = new Cookies();

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
    const token = {
      token: cookie.get("user")
    };
    axios
      .post(URL.localhost + "/customer/customerlist", token, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        dispatch(SET_CUSTOMERS(res.data.customerlist));
      })
      .catch(error => {
        dispatch(doLogout());
      });
  };
};

export const addCustomer = customer => {
  return async dispatch => {
    const data = {
      token: cookie.get("user"),
      customer: customer
    };
    axios
      .post(URL.localhost + "/customer/customer_add", data, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        customer.id = res.data.id;
        dispatch(ADD_CUSTOMER(customer));
      })
      .catch(error => {
        dispatch(doLogout());
      });
  };
};

export const deleteCustomer = customer => {
  return async dispatch => {
    const data = {
      token: cookie.get("user"),
      id: customer.id
    };
    axios
      .post(URL.localhost + "/customer/customer_remove", data, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(() => {
        dispatch(REMOVE_CUSTOMER(customer));
      })
      .catch(error => {
        dispatch(doLogout());
      });
  };
};

export const updateCustomer = customer => {
  return async dispatch => {
    const data = {
      token: cookie.get("user"),
      customer: customer
    };
    axios
      .post(URL.localhost + "/customer/customer_update", data, {
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
