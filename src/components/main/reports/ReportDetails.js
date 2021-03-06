import React from "react";
import {
  TextField,
  Dialog,
  Button,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import { EditReportButton } from "./edit/EditReportButton";
import { detailsDialog } from "../../../styles/Styles";
import { connect } from "react-redux";
const ReportDetails = props => {
  const styles = detailsDialog();
  const handleClose = () => {
    props.setShowReportDetails(false);
  };

  return (
    <Dialog
      open={props.showReportDetails}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      className={styles.root}
    >
      <EditReportButton
        reportSelected={props.reportSelected}
        setReportSelected={props.setReportSelected}
        setShowReportDetails={props.setShowReportDetails}
      />
      <DialogTitle id="max-width-dialog-title" className="align-text-center">
        Report details
      </DialogTitle>
      <DialogContent className={styles.label}>
        <TextField
          label="Employee sign"
          name="employeesign"
          defaultValue={props.reports[props.reportSelected].employeesign}
        />
        <TextField
          label="Revenue"
          name="revenue"
          defaultValue={props.reports[props.reportSelected].revenue}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          label="Customer sign"
          name="customersign"
          fullWidth
          defaultValue={props.reports[props.reportSelected].customersign}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          label="Digital cash"
          name="digitalcashflow"
          fullWidth
          defaultValue={props.reports[props.reportSelected].digitalcashflow}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          label="Cash"
          name="cashflow"
          fullWidth
          defaultValue={props.reports[props.reportSelected].cashflow}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          label="Location"
          name="location"
          fullWidth
          defaultValue={props.reports[props.reportSelected].location}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          label="Payment"
          name="payment"
          fullWidth
          defaultValue={props.reports[props.reportSelected].payment}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          label="Extra info"
          name="infofield"
          fullWidth
          defaultValue={props.reports[props.reportSelected].infofield}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          label="Table name"
          name="gametablename"
          fullWidth
          defaultValue={props.reports[props.reportSelected].gametablename}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          label="Status"
          name="status"
          fullWidth
          defaultValue={props.reports[props.reportSelected].status}
          InputProps={{
            readOnly: true
          }}
        />
      </DialogContent>
      <Button variant="contained" onClick={handleClose}>
        Close
      </Button>
    </Dialog>
  );
};

const mapStateToProps = state => ({
  reports: state.reports.reports
});
export default connect(mapStateToProps)(ReportDetails);
