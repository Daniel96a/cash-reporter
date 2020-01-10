import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export const AddReport = props => {
  const classes = useStyles();

  const report = {
    employeesign: "123",
    revenue: 700,
    reportnr: "1",
    customersign: "073-123456",
    digitalcashflow: 1000,
    cashflow: 1000,
    location: "Stockholm",
    payment: 1200,
    infofield: "Bra kväll",
    id: 1,
    tablename: "BlackJack",
    status: "Avslutad"
  };
  const createReport = e => {
    props.addReport(report);

    document.getElementsByName("employeesign")[0].value = "";
    document.getElementsByName("revenue")[0].value = "";
    document.getElementsByName("reportnr")[0].value = "";
    document.getElementsByName("customersign")[0].value = "";
    document.getElementsByName("digitalcashflow")[0].value = "";
    document.getElementsByName("cashflow")[0].value = "";
    document.getElementsByName("location")[0].value = "";
    document.getElementsByName("payment")[0].value = "";
    document.getElementsByName("infofield")[0].value = "";
    document.getElementsByName("tablename")[0].value = "";
    document.getElementsByName("status")[0].value = "";
    props.setShowAddReportForm(false);
    e.preventDefault();
  };

  const handleClose = () => {
    props.setShowAddReportForm(false);
  };

  return (
    <Dialog
      open={props.showAddReportForm}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      className={classes.root}
    >
      <DialogTitle id="max-width-dialog-title" className="align-text-center">
        Add Report
      </DialogTitle>
      <DialogContent>
        <TextField
          style={halfWidth}
          hintText="Enter employee sign here"
          floatingLabelText="Employeesign"
          name="employeesign"
          onChange={e => report.employeesign === e.target.value}
          defaultValue={report.employeesign}
        />
        <TextField
          style={halfWidth}
          hintText="Enter revenue here"
          floatingLabelText="Revenue"
          name="revenue"
          onChange={e => report.revenue === e.target.value}
          defaultValue={report.revenue}
        />
        <TextField
          style={halfWidth}
          hintText="Enter reportnr here"
          floatingLabelText="Reportnr"
          name="reportnr"
          onChange={e => report.reportnr === e.target.value}
          defaultValue={report.reportnr}
        />
        <TextField
          style={halfWidth}
          hintText="Enter customer sign here"
          floatingLabelText="Customer sign"
          name="customersign"
          onChange={e => report.customersign === e.target.value}
          defaultValue={report.customersign}
        />
        <TextField
          style={halfWidth}
          hintText="Enter digital cashflow here"
          floatingLabelText="Digital cashflow"
          name="digitalcashflow"
          onChange={e => report.digitalcashflow === e.target.value}
          defaultValue={report.digitalcashflow}
        />
        <TextField
          style={halfWidth}
          hintText="Enter cashflow here"
          floatingLabelText="Cashflow"
          name="cashflow"
          onChange={e => report.cashflow === e.target.value}
          defaultValue={report.cashflow}
        />
        <TextField
          style={halfWidth}
          hintText="Enter location here"
          floatingLabelText="Location"
          name="location"
          onChange={e => report.location === e.target.value}
          defaultValue={report.location}
        />
        <TextField
          style={halfWidth}
          hintText="Enter payment here"
          floatingLabelText="Payment"
          name="payment"
          onChange={e => report.payment === e.target.value}
          defaultValue={report.payment}
        />
        <TextField
          style={halfWidth}
          hintText="Enter extra information here"
          floatingLabelText="Extra info"
          name="infofield"
          onChange={e => report.infofield === e.target.value}
          defaultValue={report.infofield}
        />
        <TextField
          style={halfWidth}
          hintText="Enter table name here"
          floatingLabelText="Table name"
          name="tablename"
          onChange={e => report.tablename === e.target.value}
          defaultValue={report.tablename}
        />
        <TextField
          style={halfWidth}
          hintText="Enter status here"
          floatingLabelText="Status"
          name="status"
          onChange={e => report.status === e.target.value}
          defaultValue={report.status}
        />
      </DialogContent>
      <Button color="primary" onClick={createReport.bind(this)}>
        Add Report
      </Button>
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

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiDialog-paperWidthSm": {
      overflowY: "visible"
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
      overflowY: "visible"
    },
    "& .MuiDialog-paperScrollPaper": {
      maxHeight: "100%"
    },
    "& .MuiDialogContent-root": {
      overflowY: "visible"
    },
    "& .MuiButtonBase-root": {
      border: "solid #80808085",
      borderWidth: "0.5px",
      margin: "0 20px 20px 20px"
    }
  }
}));