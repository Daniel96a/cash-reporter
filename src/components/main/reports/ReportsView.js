import React, { useState } from "react";

import { AddReport } from "./add/AddReport";
import ReportList from "./ReportList";
import { AddReportButton } from "./add/AddReportButton";

const ReportsView = props => {
  const [showAddReportsForm, setShowAddReportsForm] = useState(false);
  
  return (
    <React.Fragment>
      {showAddReportsForm && (
        <AddReport
          showAddReportsForm={showAddReportsForm}
          addReport={props.addReport}
          setShowAddReportsForm={setShowAddReportsForm}
        />
      )}
      <ReportList
        reports={props.reports}
        addReport={props.addReport}
        updateReport={props.updateReport}
        deleteReport={props.deleteReport}
        fetchReportList={props.fetchReportList}
      />
      <AddReportButton
        setShowAddReportsForm={setShowAddReportsForm}
        showAddReportsForm={showAddReportsForm}
      />
    </React.Fragment>
  );
};
export default ReportsView;
