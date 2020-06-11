import React from "react";
import {
  TextField,
  DialogTitle,
  DialogContent,
  Dialog,
  Button,
} from "@material-ui/core";
import { addReport } from "../../../../redux/actions/reports";
import { connect } from "react-redux";

import { detailsDialog } from "../../../../styles/Styles";
import MarkerTable from "../MarkerTable";

const AddReport = ({ addReport, toggleShowAddReport, showAddReport }) => {
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
    gametablename: "",
    status: "",
  };

  const createReport = (e) => {
    addReport(report);
    toggleShowAddReport(false);
    e.preventDefault();
  };

  const handleClose = () => {
    toggleShowAddReport(false);
  };

  return (
    <Dialog
      open={showAddReport}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      className={styles.root}
    >
      <DialogTitle id="max-width-dialog-title">Add Report</DialogTitle>
      <DialogContent className={styles.label}>
        <form onSubmit={createReport}>
          <div
            style={{
              marginBottom: 116,
              overflow: "auto",
            }}
          >
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
              name="gametablename"
              onChange={(e) => (report.gametablename = e.target.value)}
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
          </div>

          <div className="buttons">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={styles.b}
            >
              Add Report
            </Button>
            <Button variant="contained" onClick={handleClose} color="primary">
              Close
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  reports: state.reports,
});
export default connect(mapStateToProps, {
  addReport,
})(AddReport);
