import React from "react";
import {
  TextField,
  DialogContent,
  DialogTitle,
  Dialog,
  Button,
} from "@material-ui/core";
import { editDialog } from "../../../../styles/Styles";
import { updateReport } from "../../../../redux/actions/reports";
import { connect } from "react-redux";
import MarkerTable from "../MarkerTable";

const EditReport = (props) => {
  const styles = editDialog();

  const report = {
    employeesign: props.reports[props.reportSelected].employeesign,
    customersign: props.reports[props.reportSelected].customersign,
    revenue: props.reports[props.reportSelected].revenue,
    digitalcashflow: props.reports[props.reportSelected].digitalcashflow,
    cashflow: props.reports[props.reportSelected].cashflow,
    location: props.reports[props.reportSelected].location,
    payment: props.reports[props.reportSelected].payment,
    infofield: props.reports[props.reportSelected].infofield,
    gametablename: props.reports[props.reportSelected].gametablename,
  };

  const updateReport = (e) => {
    document.getElementsByName("address")[0].value = report.address;
    document.getElementsByName("phonenr")[0].value = report.phonenr;
    document.getElementsByName("email")[0].value = report.email;
    props.setShowEditReport(false);
    props.updateReport(report);
  };

  const handleClose = () => {
    props.setShowEditReport(false);
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      className={styles.root}
    >
      <DialogTitle id="max-width-dialog-title" className="align-text-center">
        Edit Report
      </DialogTitle>
      <DialogContent className={styles.label}>
        <form onSubmit={updateReport}>
          <div
            style={{
              marginBottom: 116,
              overflow: "auto",
            }}
          >
            <TextField
              label="Employee Sign"
              name="employeesign"
              defaultValue={report.employeesign}
              onChange={(e) => (report.employeesign = e.target.value)}
            />
            <TextField
              label="customer Sign"
              name="customersign"
              defaultValue={report.customersign}
              onChange={(e) => (report.customersign = e.target.value)}
            />
            <TextField
              label="Revenue"
              name="revenue"
              defaultValue={report.revenue}
              onChange={(e) => (report.revenue = e.target.value)}
              disabled
            />
            <TextField
              label="Digital Cashflow"
              name="digitalcashflow"
              defaultValue={report.digitalcashflow}
              onChange={(e) => (report.digitalcashflow = e.target.value)}
            />
            <TextField
              label="Cashflow"
              name="cashflow"
              defaultValue={report.cashflow}
              onChange={(e) => (report.cashflow = e.target.value)}
            />
            <TextField
              label="Location"
              name="location"
              defaultValue={report.location}
              onChange={(e) => (report.location = e.target.value)}
            />
            <TextField
              label="Payment"
              name="payment"
              defaultValue={report.payment}
              onChange={(e) => (report.payment = e.target.value)}
            />
            <TextField
              label="Info"
              name="infofield"
              defaultValue={report.infofield}
              onChange={(e) => (report.infofield = e.target.value)}
            />
            <TextField
              label="Table name"
              name="gametablename"
              defaultValue={report.gametablename}
              onChange={(e) => (report.gametablename = e.target.value)}
            />
            <MarkerTable />
          </div>
          <div className="buttons">
            <Button variant="contained" type="submit" color="primary">
              Update
            </Button>
            <Button variant="contained" onClick={handleClose} color="secondary">
              Abort
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  reports: state.reports.reports,
});
export default connect(mapStateToProps, {
  updateReport,
})(EditReport);
