import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {detailsDialog } from "../../../../styles/Styles";

export const AddReport = props => {
  const styles = detailsDialog();

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
      className={styles.root}
    >
      <DialogTitle id="max-width-dialog-title" className="align-text-center">
        Add Report
      </DialogTitle>
      <DialogContent>
        <TextField
          style={halfWidth}
          hintText="Employee signature"
          floatingLabelText="Employeesign"
          name="employeesign"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => report.employeesign === e.target.value}
          defaultValue={report.employeesign}
        />
        <TextField
          style={halfWidth}
          hintText="Enter revenue here"
          floatingLabelText="Revenue"
          name="revenue"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => report.revenue === e.target.value}
          defaultValue={report.revenue}
        />
        <TextField
          style={halfWidth}
          hintText="Enter reportnr here"
          floatingLabelText="Reportnr"
          name="reportnr"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => report.reportnr === e.target.value}
          defaultValue={report.reportnr}
        />
        <TextField
          style={halfWidth}
          hintText="Enter customer sign here"
          floatingLabelText="Customer sign"
          name="customersign"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => report.customersign === e.target.value}
          defaultValue={report.customersign}
        />
        <TextField
          style={halfWidth}
          hintText="Enter digital cashflow here"
          floatingLabelText="Digital cashflow"
          name="digitalcashflow"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => report.digitalcashflow === e.target.value}
          defaultValue={report.digitalcashflow}
        />
        <TextField
          style={halfWidth}
          hintText="Enter cashflow here"
          floatingLabelText="Cashflow"
          name="cashflow"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => report.cashflow === e.target.value}
          defaultValue={report.cashflow}
        />
        <TextField
          style={halfWidth}
          hintText="Enter location here"
          floatingLabelText="Location"
          name="location"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => report.location === e.target.value}
          defaultValue={report.location}
        />
        <TextField
          style={halfWidth}
          hintText="Enter payment here"
          floatingLabelText="Payment"
          name="payment"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => report.payment === e.target.value}
          defaultValue={report.payment}
        />
        <TextField
          style={halfWidth}
          hintText="Enter extra information here"
          floatingLabelText="Extra info"
          name="infofield"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => report.infofield === e.target.value}
          defaultValue={report.infofield}
        />
        <TextField
          style={halfWidth}
          hintText="Enter table name here"
          floatingLabelText="Table name"
          name="tablename"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => report.tablename === e.target.value}
          defaultValue={report.tablename}
        />
        <TextField
          style={halfWidth}
          hintText="Enter status here"
          floatingLabelText="Status"
          name="status"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
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