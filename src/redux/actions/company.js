import * as types from "./types";
import axios from "axios";
import Cookies from "universal-cookie";
import { useUrl } from "./URL";

const cookie = new Cookies();
export const SET_COMPANY = company => ({
  type: types.FETCH_COMPANY,
  company
});


export const fetchCompany = () => {
  return async dispatch => {
    axios
      .get(
        `${useUrl}/company?access_token=${cookie.get(
          "access_token"
        )}`
      )
      .then(res => {
        dispatch(SET_COMPANY(res.data));
      })
  };
};
export const clearCompany = company => {
  return async dispatch => {
    dispatch(SET_COMPANY({}));
  };
};
