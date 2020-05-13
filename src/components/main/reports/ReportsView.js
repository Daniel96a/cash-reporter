import React, { useState } from "react";

import AddReport from "./add/AddReport";
import ReportList from "./ReportList";
import { AddReportButton } from "./add/AddReportButton";

const ReportsView = () => {
  const [showAddReportsForm, setShowAddReportsForm] = useState(false);
  return (
    <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>

      {showAddReportsForm && (
        <AddReport
          showAddReportsForm={showAddReportsForm}
          setShowAddReportsForm={setShowAddReportsForm}
        />
      )}
      <ReportList />
      <AddReportButton
        setShowAddReportsForm={setShowAddReportsForm}
        showAddReportsForm={showAddReportsForm}
      />
    </div>
  );
};

export default ReportsView;
