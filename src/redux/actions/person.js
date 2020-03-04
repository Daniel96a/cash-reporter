import * as types from "./types";
import axios from "axios";
import Cookies from "universal-cookie";
import { addEmployee, deleteEmployee } from "./employees";
import { addCustomer, deleteCustomer } from "./customers";

const cookie = new Cookies();
export const SET_PERSON = person => ({
  type: types.FETCH_PERSON,
  person
});
export const UPDATE_PERSON = person => ({
  type: types.UPDATE_PERSON,
  person
});

export const fetchPerson = id => {
  return async dispatch => {
    axios
      .get(
        `http://localhost:8080/person/${id}?access_token=${cookie.get(
          "access_token"
        )}`
      )
      .then(res => {
        dispatch(SET_PERSON(res.data));
      })
      .catch(error => { });
  };
};
export const updatePerson = person => {
  return async dispatch => {
    axios
      .put(
        `http://localhost:8080/person?access_token=${cookie.get("access_token")}`,
        person,
        {
          headers: {
            Authorization: axios.defaults.headers.common.Authorization
          }
        }
      )
      .then(res => {
        dispatch(UPDATE_PERSON(person));
      });
  };
};
export const addPerson = person => {
  return async dispatch => {
    axios
      .post(
        `http://localhost:8080/person?access_token=${cookie.get("access_token")}`,
        person,
        {
          headers: {
            Authorization: axios.defaults.headers.common.Authorization
          }
        }
      ).then(res => {
        person.fullname = res.data.firstname + " " + res.data.lastname;
        person.personid = res.data.personid;
        if (person.roleid === 1) {
          dispatch(addEmployee(person))
        }
        if (person.roleid === 2) {
          dispatch(addCustomer(person))
        }
      })
      .then(res => {
        console.log(res)
      });
  };
};
export const deletePerson = id => {
  return async dispatch => {
    axios
      .delete(
        `http://localhost:8080/person/${id}?access_token=${cookie.get(
          "access_token"
        )}`
      )
      .then(res => {
        dispatch(deleteCustomer(id));
        dispatch(deleteEmployee(id))
      })
      .catch(error => { });
  };
};
export const clearPerson = person => {
  return async dispatch => {
    dispatch(SET_PERSON({}));
  };
};
