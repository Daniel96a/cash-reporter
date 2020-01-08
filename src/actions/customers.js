import * as types from "./types";
import axios from "axios";
import { customHeaders } from "./customHeaders";
import { URL } from "./URLs";

export const setCustomers = customers => ({
  type: types.FETCH_CUSTOMERS,
  customers
});

export const fetchCustomerList = () => {
  return async dispatch => {
    const token = {
      token: localStorage.token
    };
    axios
      .post(URL.localhost9091 + "customer/customerlist", token, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        console.log(res.data.customerlist);
        dispatch(setCustomers(res.data.customerlist));
      })
      .catch(error => {
        alert(error);
      });
  };
};

export const addCustomer = customer => {
  return async dispatch => {
    const data = {
      token: localStorage.token,
      customer: customer
    };
    console.log(data);
    axios
      .post(URL.localhost9091 + "customer/customer_add", data, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        dispatch(fetchCustomerList());
        console.log(
          "Added customer with response: " + JSON.stringify(res.data)
        );
      })
      .catch(error => {
        alert(error);
      });
  };
};

export const removeCustomer = token => {
  return async dispatch => {
    token = {
      token: token
    };
    axios
      .post(URL.localhost9091 + "customer/customerlist", token, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        console.log(res.data);
        dispatch(setCustomers(res.data));
      })
      .catch(error => {
        alert(error);
      });
  };
};

export const updateCustomer = customer => {
  return async dispatch => {
    const data = {
      token: localStorage.token,
      customer: customer
    };
    axios
      .post(URL.localhost9091 + "customer/customer_update", data, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        console.log(res.data);
        dispatch(fetchCustomerList(res.data));
      })
      .catch(error => {
        alert(error);
      });
  };
};
