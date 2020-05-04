import * as types from "./types";
import axios from "axios";
import { customHeaders } from "./customHeaders";
import { Cookies } from "react-cookie";
import { useUrl } from "./URL";

const cookie = new Cookies();
export const setReports = (reports) => ({
  type: types.FETCH_REPORTS,
  reports,
});

export const fetchReportList = () => {
  return async (dispatch) => {
    axios
      .get(`${useUrl}/report?access_token=${cookie.get("access_token")}`)
      .then((res) => {
        dispatch(setReports(res.data));
      });
  };
};

export const addReport = (data) => {
  return async (dispatch) => {
    axios
      .post(
        `${useUrl}/person?access_token=${cookie.get("access_token")}`,
        data,
        {
          headers: {
            Authorization: axios.defaults.headers.common.Authorization,
          },
          timeout: 1000,
        }
      )
      .then((res) => {
        dispatch(fetchReportList());
      });
  };
};

export const deleteReport = (report) => {
  return async (dispatch) => {
    axios
      .delete(`${useUrl}/report/${report.id}`, {
        headers: customHeaders,
        timeout: 1000,
      })
      .then((res) => {
        dispatch(fetchReportList(res.data));
      });
  };
};

export const updateReport = (report) => {
  return async (dispatch) => {
    axios
      .put(`${useUrl}/report/${report.id}`, {
        headers: customHeaders,
        timeout: 1000,
      })
      .then((res) => {
        dispatch(fetchReportList(res.data.customers));
      });
  };
};
