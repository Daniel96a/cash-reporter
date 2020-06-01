import * as types from "./types";

export const setSelectedView = (selectedView) => ({
  type: types.SELECTED_VIEW,
  selectedView,
});
export const setShowAddCustomer = (showAddCustomer) => ({
  type: types.SHOW_ADD_CUSTOMER,
  showAddCustomer,
});

export const setShowAddAddEmployee = (showAddEmployee) => ({
  type: types.SHOW_ADD_EMPLOYEE,
  showAddEmployee,
});
export const setShowAddReport = (showAddReport) => ({
  type: types.SHOW_ADD_REPORT,
  showAddReport,
});
export const setShowList = (showList) => ({
  type: types.SHOW_LIST,
  showList,
});

export const changeView = (selectedView) => {
  return async (dispatch) => {
    return dispatch(setSelectedView(selectedView));
  };
};
export const toggleShowAddCustomer = (showAddCustomer) => {
  return async (dispatch) => {
    dispatch(setShowAddCustomer(showAddCustomer));
  };
};
export const toggleShowAddEmployee = (showAddEmployee) => {
  return async (dispatch) => {
    dispatch(setShowAddAddEmployee(showAddEmployee));
  };
};
export const toggleShowAddReport = (showAddReport) => {
  return async (dispatch) => {
    dispatch(setShowAddReport(showAddReport));
  };
};
export const showList = (showList) => {
  return async (dispatch) => {
    dispatch(setShowList(showList));
  };
};
