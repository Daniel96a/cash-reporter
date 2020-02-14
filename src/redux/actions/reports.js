import * as types from "./types";
import axios from "axios";
import { customHeaders } from "./customHeaders";
import { URL } from "./URLs";
import { doLogout } from "./auth";
import {Cookies} from "react-cookie";
const cookie = new Cookies();
export const setReports = reports => ({
  type: types.FETCH_REPORTS,
  reports
});

export const fetchReportList = () => {
  return async dispatch => {
    const token = {
      token: cookie.get("user")
    };
    axios
      .post(URL.localhost + "/report/reportlist", token, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        dispatch(setReports(res.data.reportlist));
      })
      .catch(() => {
        dispatch(doLogout());
      });
  };
};

export const addReport = report => {
  return async dispatch => {
    const data = {
      token: cookie.get("user"),
      report: report
    };
    axios
      .post(URL.localhost + "/report/report_add", data, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        dispatch(fetchReportList());
      })
      .catch(error => {
        dispatch(doLogout());
      });
  };
};

export const deleteReport = report => {
  return async dispatch => {
    const data = {
      token: cookie.get("user"),
      reportid: report.id
    };
    axios
      .post(URL.localhost + "/report/report_remove", data, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        dispatch(fetchReportList(res.data));
      })
      .catch(error => {
        dispatch(doLogout());
      });
  };
};

export const updateReport = report => {
  return async dispatch => {
    const data = {
      token: cookie.get("user"),
      report: report
    };
    axios
      .post(URL.localhost + "/report/report_update", data, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        dispatch(fetchReportList(res.data.customers));
      })
      .catch(error => {
        dispatch(doLogout());
      });
  };
};
