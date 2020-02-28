import * as types from "./types";
import axios from "axios";
import Cookies from "universal-cookie";
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
      .catch(error => {});
  };
};
export const updatePerson = person => {
  console.log(person.personid);
  return async dispatch => {
    axios
      .put(
        `http://localhost:8080/person/${
          person.personid
        }?access_token=${cookie.get("access_token")}`,
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
export const clearPerson = person => {
  return async dispatch => {
    dispatch(SET_PERSON({}));
  };
};
