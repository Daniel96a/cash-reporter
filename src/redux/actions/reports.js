import * as types from "./types";
import axios from "axios";
import { customHeaders } from "./customHeaders";
import { doLogout } from "./auth";
import { Cookies } from "react-cookie";
const cookie = new Cookies();
export const setReports = reports => ({
  type: types.FETCH_REPORTS,
  reports
});

export const fetchReportList = () => {
  return async dispatch => {
    axios
      .get(`http://localhost:8080/customer?access_token=${cookie.get("access_token")}`)
      .then(res => {
        dispatch(setReports(res.data));
      })
      .catch(() => {
        dispatch(doLogout());
      });
  };
};

export const addReport = report => {
  return async dispatch => {
    axios
      .get("http://localhost:8080/report", "", {
        headers: {
          Authorization: axios.defaults.headers.common["Authorization"]
        },
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
    axios
      .post("http://localhost:8080/report/report_remove", {
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
    axios
      .post("http://localhost:8080/report/report_update", {
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
