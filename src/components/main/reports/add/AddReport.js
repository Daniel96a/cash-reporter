import React from "react";
import {
  TextField,
  DialogTitle,
  DialogContent,
  Dialog,
  Button,
} from "@material-ui/core";
import { detailsDialog } from "../../../../styles/Styles";
import { addReport } from "../../../../redux/actions/reports";
import { connect } from "react-redux";
import MarkerTable from "./MarkerTable";

const AddReport = (props) => {
  const styles = detailsDialog();

  const report = {
    employeesign: "",
    revenue: "",
    customersign: "",
    digitalcashflow: "",
    cashflow: "",
    location: "",
    payment: "",
    infofield: "",
    tablename: "",
    status: "",
  };

  const createReport = (e) => {
    props.addReport(report);
    props.setShowAddReportsForm(false);
    e.preventDefault();
  };

  const handleClose = () => {
    props.setShowAddReportsForm(false);
  };

  return (  
    <Dialog
      open={props.showAddReportsForm}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      className={styles.root}
    >
      <DialogTitle id="max-width-dialog-title">Add Report</DialogTitle>
      <DialogContent className={styles.label}>
        <TextField
          label="Employee sign"
          name="employeesign"
          onChange={(e) => (report.employeesign = e.target.value)}
        />
        <TextField
          label="Customer sign"
          name="customersign"
          onChange={(e) => (report.customersign = e.target.value)}
          defaultValue={report.customersign}
        />
        <TextField
          label="Table name"
          name="tablename"
          onChange={(e) => (report.tablename = e.target.value)}
        />
        <TextField
          label="Location"
          name="location"
          onChange={(e) => (report.location = e.target.value)}
        />
        <TextField
          label="Cash flow"
          name="cashflow"
          type="number"
          required
          onChange={(e) => (report.cashflow = e.target.value)}
        />
        <TextField
          label="Digital cash flow"
          name="digitalcashflow"
          type="number"
          required
          onChange={(e) => (report.digitalcashflow = e.target.value)}
        />
        <TextField
          label="Payment"
          name="payment"
          type="number"
          required
          onChange={(e) => (report.payment = e.target.value)}
        />
        <TextField
          label="Revenue"
          name="revenue"
          type="number"
          required
          onChange={(e) => (report.revenue = e.target.value)}
        />
        <TextField
          label="Extra info"
          name="infofield"
          multiline
          onChange={(e) => (report.infofield = e.target.value)}
        />

        <TextField
          label="Status"
          name="status"
          onChange={(e) => (report.status = e.target.value)}
        />
        <MarkerTable />
      </DialogContent>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={createReport.bind(this)}
      >
        Add Report
      </Button>
      <Button variant="contained" onClick={handleClose} color="primary">
        Close
      </Button>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  customers: state.customers,
});
export default connect(mapStateToProps, {
  addReport,
})(AddReport);
