import * as types from "./types";
import axios from "axios";
import { customHeaders } from "./customHeaders";
import { URL } from "./URLs";

export const setReports = reports => ({
  type: types.FETCH_REPORTS,
  reports
});

export const fetchReportList = () => {
  return async dispatch => {
    const token = {
      token: localStorage.token
    };
    axios
      .post(URL.localhost + "/report/reportlist", token, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        console.log(res.data.reportlist);
        dispatch(setReports(res.data.reportlist));
      })
      .catch(error => {
        alert(error);
      });
  };
};

export const addReport = report => {
  return async dispatch => {
    const data = {
      token: localStorage.token,
      report: report
    };
    console.log(data);
    axios
      .post(URL.localhost + "/report/report_add", data, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        dispatch(fetchReportList());
        console.log("Added report with response: " + JSON.stringify(res.data));
      })
      .catch(error => {
        alert(error);
      });
  };
};

export const deleteReport = report => {
  return async dispatch => {
    const data = {
      token: localStorage.token,
      id: report.id
    };
    axios
      .post(URL.localhost + "/report/report_remove", data, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        console.log(res.data);
        dispatch(fetchReportList(res.data));
      })
      .catch(error => {
        alert(error);
      });
  };
};

export const updateReport = report => {
  return async dispatch => {
    const data = {
      token: localStorage.token,
      report: report
    };
    axios
      .post(URL.localhost + "/report/report_update", data, {
        headers: customHeaders,
        timeout: 1000
      })
      .then(res => {
        console.log(res.data);
        dispatch(fetchReportList(res.data));
      })
      .catch(error => {
        alert(error);
      });
  };
};
