import * as types from "./types";
import axios from "axios";
import { customHeaders } from "./customHeaders";
import { useUrl } from "./URL";
import { API_ENDPOINTS } from "./endpoint-constants/api-endpoint.constants";
import { authorizationParams } from "../../utils/authorizationParams";

export const setReports = (reports) => ({
  type: types.FETCH_REPORTS,
  reports,
});

export const setReport = (report) => ({
  type: types.ADD_REPORT,
  report,
});

export const fetchReportList = () => {
  return async (dispatch) => {
    axios
      .get(useUrl + API_ENDPOINTS.report.all + authorizationParams)
      .then((res) => {
        dispatch(setReports(res.data));
      });
  };
};

export const addReport = (data) => {
  return async (dispatch) => {
    axios
      .post(useUrl + API_ENDPOINTS.report.all, data, {
        headers: {
          Authorization: axios.defaults.headers.common.Authorization,
        },
        timeout: 1000,
      })
      .then((res) => {
        dispatch(fetchReportList());
      })
  };
};

export const deleteReport = (report) => {
  return async (dispatch) => {
    axios
      .delete(`${useUrl + API_ENDPOINTS.report.all}/${report}`, {
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
      .put(`${useUrl + API_ENDPOINTS.report.all}/${report.id}`, {
        headers: customHeaders,
        timeout: 1000,
      })
      .then((res) => {
        dispatch(fetchReportList(res.data.customers));
      });
  };
};
