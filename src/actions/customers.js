import * as types from "./types";
import axios from "axios";
import { customHeaders } from "./customHeaders";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import { URL } from "./URLs";

export const setCustomerList = customers => ({
  type: types.SET_CUSTOMER_LIST,
  customers
});

export const getCustomerList = token => {
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
        setAuthorizationToken(res.data.token);
        dispatch(setCustomerList(res.data));
      })
      .catch(error => {
        alert(error);
      });
  };
};

export const addCustomer = customer => {
  return async dispatch => {
    const data = {
      token: localStorage.getItem("token"),
      customer: {
        firstName: customer.username
      }
    };
    console.log(customer);
    axios
      .post(URL.localhost9091 + "customer/customer_add", data, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        console.log(res.data);
        setAuthorizationToken(res.data.token);
        dispatch(setCustomerList(res.data));
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
        setAuthorizationToken(res.data.token);
        dispatch(setCustomerList(res.data));
      })
      .catch(error => {
        alert(error);
      });
  };
};

export const updateCustomer = token => {
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
        setAuthorizationToken(res.data.token);
        dispatch(setCustomerList(res.data));
      })
      .catch(error => {
        alert(error);
      });
  };
};
