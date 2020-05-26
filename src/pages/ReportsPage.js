import React from "react";

import AddReport from "../components/main/reports/add/AddReport";
import ReportList from "../components/main/reports/ReportList";
import { toggleShowAddReport } from "../redux/actions/states";
import { connect } from "react-redux";
const ReportsPage = ({ showAddReport, toggleShowAddReport }) => {
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
})(ReportsPage);
