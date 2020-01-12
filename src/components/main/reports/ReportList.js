import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ReportDetails } from "./ReportDetails";
import { listStyle } from "../../../styles/Styles";
import { AddCustomerButton } from "../users/customers/add/AddCustomerButton";



const ReportList = props => {
  const styles = listStyle()
  const [showReportDetails, setShowReportDetails] = useState(false);
  const [reportSelected, setReportSelected] = useState(null);

  const openDetails = e => {
    setReportSelected(props.reports.reports[e.currentTarget.id]);
    setShowReportDetails(true);
  };
  return (
    <React.Fragment>
      {reportSelected !== null && showReportDetails && (
        <ReportDetails
          reports={props.reports.reports}
          reportSelected={reportSelected}
          setReportSelected={setReportSelected}
          showReportDetails={showReportDetails}
          setShowReportDetails={setShowReportDetails}
          updateReport={props.updateReport}
          deleteReport={props.deleteReport}
        />
      )}
      {props.reports !== undefined && (
        <List dense className={styles.root} disablePadding>
          {props.reports.reports.map((report, index) => (
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
      
      {props.reports.reports.length === 0 && <p>No reports found</p>}
      <AddCustomerButton />

    </React.Fragment>
  );
};
export default ReportList;
