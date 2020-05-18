import * as types from "./types";
import axios from "axios";
import { addEmployee, deleteEmployee } from "./employees";
import { addCustomer, deleteCustomer } from "./customers";
import { useUrl } from "./URL";
import {API_ENDPOINTS} from './endpoint-constants/api-endpoint.constants'
export const SET_PERSON = (person) => ({
  type: types.FETCH_PERSON,
  person,
});
export const UPDATE_PERSON = (person) => ({
  type: types.UPDATE_PERSON,
  person,
});
export const fetchPerson = (id) => {
  return async (dispatch) => {
    axios
      .get(`${useUrl + API_ENDPOINTS.person.all.person}/${id}`)
      .then((res) => {
        dispatch(SET_PERSON(res.data));
      })
      .catch((error) => {});
  };
};
export const updatePerson = (person) => {
  return async (dispatch) => {
    axios
      .put(useUrl + API_ENDPOINTS.person.all.person, person, {
        headers: {
          Authorization: axios.defaults.headers.common.Authorization,
        },
      })
      .then((res) => {
        dispatch(UPDATE_PERSON(person));
      });
  };
};
export const addPerson = (person) => {
  return async (dispatch) => {
    axios
      .post(useUrl + API_ENDPOINTS.person.all.person, person, {
        headers: {
          Authorization: axios.defaults.headers.common.Authorization,
        },
      })
      .then((res) => {
        person.fullname = res.data.firstname + " " + res.data.lastname;
        person.personid = res.data.personid;
        if (person.roleid === 1) {
          dispatch(addEmployee(person));
        }
        if (person.roleid === 2) {
          dispatch(addCustomer(person));
        }
      });
  };
};
export const deletePerson = (id) => {
  return async (dispatch) => {
    axios
      .delete(`${useUrl + API_ENDPOINTS.person.all}/${id}`, {
        headers: {
          Authorization: axios.defaults.headers.common.Authorization,
        },
      })
      .then((res) => {
        dispatch(deleteCustomer(id));
        dispatch(deleteEmployee(id));
      })
      .catch((error) => {});
  };
};
export const clearPerson = (person) => {
  return async (dispatch) => {
    dispatch(SET_PERSON({}));
  };
};
