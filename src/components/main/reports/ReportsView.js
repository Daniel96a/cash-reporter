import React from "react";

import AddReport from "./add/AddReport";
import ReportList from "./ReportList";
import { toggleShowAddReport } from "../../../redux/actions/states";
import { connect } from "react-redux";
const ReportsView = ({ showAddReport, toggleShowAddReport }) => {
  console.log(showAddReport);
  return (
    <>
      <AddReport
        showAddReport={showAddReport}
        toggleShowAddReport={toggleShowAddReport}
      />
      <ReportList />
    </>
  );
};

const mapStateToProps = (state) => ({
  showAddReport: state.states.showAddReport,
});
export default connect(mapStateToProps, {
  toggleShowAddReport,
})(ReportsView);
