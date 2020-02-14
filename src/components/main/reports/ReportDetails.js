import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
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
      <DialogContent>
        <TextField
          style={halfWidth}
          floatingLabelText="Employee sign"
          name="employeesign"
          variant="filled"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={props.reports[props.reportSelected].employeesign}
          readOnly
        />
        <TextField
          style={halfWidth}
          floatingLabelText="Revenue"
          name="revenue"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={props.reports[props.reportSelected].revenue}
          variant="filled"
          readOnly
        />
        <TextField
          floatingLabelText="Report ID"
          name="reportid"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={props.reports[props.reportSelected].id}
          variant="filled"
          readOnly
        />
        <TextField
          floatingLabelText="Customer sign"
          name="customersign"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={props.reports[props.reportSelected].customersign}
          readOnly
        />
        <TextField
          floatingLabelText="Digital cash"
          name="digitalcashflow"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={props.reports[props.reportSelected].digitalcashflow}
          readOnly
        />
        <TextField
          floatingLabelText="Cash"
          name="cashflow"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={props.reports[props.reportSelected].cashflow}
          readOnly
        />
        <TextField
          floatingLabelText="Location"
          name="location"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={props.reports[props.reportSelected].location}
          readOnly
        />
        <TextField
          floatingLabelText="Payment"
          name="payment"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={props.reports[props.reportSelected].payment}
          readOnly
        />
        <TextField
          floatingLabelText="Extra info"
          name="infofield"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={props.reports[props.reportSelected].infofield}
          readOnly
        />
        <TextField
          floatingLabelText="Table name"
          name="tablename"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={props.reports[props.reportSelected].tablename}
          readOnly
        />
        <TextField
          floatingLabelText="Status"
          name="status"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={props.reports[props.reportSelected].status}
          readOnly
        />
      </DialogContent>
      <Button onClick={handleClose} color="primary">
        Close
      </Button>
    </Dialog>
  );
};
const halfWidth = {
  width: "49.5%",
  marginLeft: "0.5%"
};
const mapStateToProps = state => ({
  reports: state.reports.reports
});
export default connect(mapStateToProps)(ReportDetails);
