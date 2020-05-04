import React, { useState } from "react";

import AddReport from "./add/AddReport";
import ReportList from "./ReportList";
import { AddReportButton } from "./add/AddReportButton";

const ReportsView = () => {
  const [showAddReportsForm, setShowAddReportsForm] = useState(false);
  return (
    <>
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
    </>
  );
};

export default ReportsView;
