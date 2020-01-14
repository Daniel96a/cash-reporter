import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { TextField, Paper } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { detailsDialog } from "../../../../styles/Styles";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  makeStyles
} from "@material-ui/core";
import { GREY } from "../../../../colorTheme/colors";

export const AddReport = props => {
  const styles = detailsDialog();
  const useStyles = makeStyles({
    cells: {
      "& .MuiTableCell-body": {
        padding: 10
      }
    },
    table: {
      color: "white"
    }
  });

  function createData(
    name,
    five,
    ten,
    twenty,
    fifty,
    oneHundred,
    exchage,
    summary
  ) {
    return { name, five, ten, twenty, fifty, oneHundred, exchage, summary };
  }

  const rows = [
    createData("In", 0, 0, 0, 0, 0, 0, 0),
    createData("Out", 0, 0, 0, 0, 0, 0, 0),
    createData("Dif", 0, 0, 0, 0, 0, 0, 0)
  ];
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
    status: ""
  };
  const createReport = e => {
    if (report.cashflow.length < 0)
      document.getElementsByName("employeesign")[0].value = report.employeesign;
    document.getElementsByName("revenue")[0].value = report.revenue;
    document.getElementsByName("customersign")[0].value = report.customersign;
    document.getElementsByName("digitalcashflow")[0].value =
      report.digitalcashflow;
    document.getElementsByName("cashflow")[0].value = report.cashflow;
    document.getElementsByName("location")[0].value = report.location;
    document.getElementsByName("payment")[0].value = report.payment;
    document.getElementsByName("infofield")[0].value = report.infofield;
    document.getElementsByName("tablename")[0].value = report.tablename;
    document.getElementsByName("status")[0].value = report.status;
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
      <DialogTitle id="max-width-dialog-title" className="align-text-center">
        Add Report
      </DialogTitle>
      <DialogContent>
        <TextField
          style={halfWidth}
          floatingLabelText="Employeesign"
          name="employeesign"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => (report.employeesign = e.target.value)}
          defaultValue={report.employeesign}
        />
        <TextField
          style={halfWidth}
          floatingLabelText="Customer sign"
          name="customersign"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => (report.customersign = e.target.value)}
          defaultValue={report.customersign}
        />
        <TextField
          floatingLabelText="Table name"
          name="tablename"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => (report.tablename = e.target.value)}
          defaultValue={report.tablename}
        />
        <TextField
          fullWidth
          floatingLabelText="Location"
          name="location"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => (report.location = e.target.value)}
          defaultValue={report.location}
        />
        <TextField
          style={halfWidth}
          floatingLabelText="Cashflow"
          name="cashflow"
          type="number"
          required
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => (report.cashflow = e.target.value)}
          defaultValue={report.cashflow}
        />
        <TextField
          style={halfWidth}
          floatingLabelText="Digital cashflow"
          name="digitalcashflow"
          type="number"
          required
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => (report.digitalcashflow = e.target.value)}
          defaultValue={report.digitalcashflow}
        />
        <TextField
          style={halfWidth}
          floatingLabelText="Payment"
          name="payment"
          type="number"
          required
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => (report.payment = e.target.value)}
          defaultValue={report.payment}
        />
        <TextField
          style={halfWidth}
          floatingLabelText="Revenue"
          name="revenue"
          type="number"
          required
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => (report.revenue = e.target.value)}
          defaultValue={report.revenue}
        />
        <TextField
          floatingLabelText="Extra info"
          name="infofield"
          fullWidth
          multiLine
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => (report.infofield = e.target.value)}
          defaultValue={report.infofield}
        />

        <TextField
          floatingLabelText="Status"
          name="status"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => (report.status = e.target.value)}
          defaultValue={report.status}
        />

        <br />
        <br />
        <TableContainer component={Paper} style={{ backgroundColor: GREY }}>
          <Table className={useStyles.table} aria-label="simple table">
            <TableBody displayrowcheckbox="false" style={useStyles.cells}>
              <TableRow>
                <TableCell>Marks</TableCell>
                <TableCell align="center">5</TableCell>
                <TableCell align="center">10</TableCell>
                <TableCell align="center">20</TableCell>
                <TableCell align="center">50</TableCell>
                <TableCell align="center">100</TableCell>
                <TableCell align="center">Exc</TableCell>
                <TableCell align="center">Sum</TableCell>
              </TableRow>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={row.name}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                    >
                      {row.five}
                    </TextField>
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={row.name}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                    >
                      {row.ten}
                    </TextField>
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={row.name}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                    >
                      {row.twenty}
                    </TextField>
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={row.name}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                    >
                      {row.fifty}
                    </TextField>
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={row.name}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                    >
                      {row.oneHundred}
                    </TextField>
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={row.name}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                    >
                      {row.exchage}
                    </TextField>
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={row.name}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      style={{ width: "40px" }}
                      type="number"
                    >
                      {row.summary}
                    </TextField>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <Button color="primary" type="submit" onClick={createReport.bind(this)}>
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
