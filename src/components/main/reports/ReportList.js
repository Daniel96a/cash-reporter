import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ReportDetails } from "./ReportDetails";
import { listStyle } from "../../../styles/Styles";
import { connect } from "react-redux";
import { updateReport, deleteReport } from "../../../actions/reports";

const ReportList = ({ reports, updateReport, deleteReport }) => {
  const styles = listStyle();
  const [showReportDetails, setShowReportDetails] = useState(false);
  const [reportSelected, setReportSelected] = useState(null);

  const openDetails = e => {
    setReportSelected(reports.reports[e.currentTarget.id]);
    setShowReportDetails(true);
  };
  return (
    <React.Fragment>
      {reportSelected !== null && showReportDetails && (
        <ReportDetails
          reports={reports.reports}
          reportSelected={reportSelected}
          setReportSelected={setReportSelected}
          showReportDetails={showReportDetails}
          setShowReportDetails={setShowReportDetails}
          updateReport={updateReport}
          deleteReport={deleteReport}
        />
      )}
      {reports.reports.length > 0 && (
        <List dense className={styles.root} disablePadding>
          {reports.reports.map((report, index) => (
            <ListItem
              id={index}
              className={`reportid-${report.id}`}
              key={index}
              button
              onClick={openDetails.bind(this)}
            >
              <ListItemText
                primary={`Report ID: ${report.id}, with Employee Signature: 
            ${report.employeesign}`}
                secondary={`Table name: ${report.tablename}
                 | Location: ${report.location}`}
              />
            </ListItem>
          ))}
        </List>
      )}

      {reports.reports.length === 0 && <p>No reports found</p>}
    </React.Fragment>
  );
};
const mapStateToProps = state => ({
  customers: state.customers
});
export default connect(mapStateToProps, {
  updateReport,
  deleteReport
})(ReportList);
