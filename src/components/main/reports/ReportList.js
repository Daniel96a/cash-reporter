import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ReportDetails from "./ReportDetails";
import { reportListStyle } from "../../../styles/Styles";
import { connect } from "react-redux";
import { fetchReportList } from "../../../redux/actions/reports";

const ReportList = ({ fetchReportList, reports }) => {
  const styles = reportListStyle();
  const [showReportDetails, setShowReportDetails] = useState(false);
  const [reportSelected, setReportSelected] = useState(null);

  const openDetails = (e) => {
    setReportSelected(e.currentTarget.id);
    setShowReportDetails(true);
  };
  useEffect(() => {
    fetchReportList();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {reportSelected !== null && showReportDetails && (
        <ReportDetails
          reportSelected={reportSelected}
          setReportSelected={setReportSelected}
          showReportDetails={showReportDetails}
          setShowReportDetails={setShowReportDetails}
        />
      )}

      <>
        {reports.reports.length > 0 && (
          <List dense className={styles.root} disablePadding>
            <div style={{ marginBottom: 5 }}>
              {reports.reports.map((report, index) => (
                
                <ListItem
                  id={index}
                  className={`reportid-${report.reportid}`}
                  key={index}
                  button
                  onClick={openDetails.bind(this)}
                >
                  <ListItemText
                    primary={`Report ID: ${report.reportid} | EmployeeID signature: 
                  ${report.employeesign}`}
                    secondary={`Table name: ${report.gametablename}
                  | Location: ${report.location}`}
                  />
                </ListItem>
              ))}
            </div>
          </List>
        )}
      </>

      {reports.reports.length === 0 && <p>No reports found</p>}
    </>
  );
};

const mapStateToProps = (state) => ({
  reports: state.reports,
});

export default connect(mapStateToProps, {
  fetchReportList,
})(ReportList);
