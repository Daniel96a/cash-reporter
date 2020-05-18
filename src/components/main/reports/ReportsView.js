import React, { useState } from "react";

import AddReport from "./add/AddReport";
import ReportList from "./ReportList";
import { AddReportButton } from "./add/AddReportButton";

const ReportsView = () => {
  const [showAddReportsForm, setShowAddReportsForm] = useState(false);
  return (
    <div style={{}}>

      {showAddReportsForm && (
        <AddReport
          showAddReportsForm={showAddReportsForm}
          setShowAddReportsForm={setShowAddReportsForm}
        />
      )}
      <ReportList
        showAddReportsForm={showAddReportsForm}
        setShowAddReportsForm={setShowAddReportsForm}
      />
      <AddReportButton showAddReportsForm={showAddReportsForm}
        setShowAddReportsForm={setShowAddReportsForm}/>
    </div>
  );
};

export default ReportsView;
