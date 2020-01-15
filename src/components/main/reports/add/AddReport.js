import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { TextField, Paper } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { detailsDialog, tableStyle } from "../../../../styles/Styles";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import { DARK } from "../../../../colorTheme/colors";

export const AddReport = props => {
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
    status: ""
  };
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

  const createReport = e => {
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
          defaultValue={""}
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
          defaultValue={""}
        />
        <TextField
          fullWidth
          floatingLabelText="Location"
          name="location"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => (report.location = e.target.value)}
          defaultValue={""}
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
          defaultValue={""}
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
          defaultValue={""}
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
          defaultValue={""}
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
          defaultValue={""}
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
          defaultValue={""}
        />

        <TextField
          floatingLabelText="Status"
          name="status"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => (report.status = e.target.value)}
          defaultValue={""}
        />

        <TableContainer
          component={Paper}
          style={{ backgroundColor: DARK, margin: "20px 0px 20px 0px" }}
        >
          <Table className={tableStyle.table} aria-label="simple table">
            <TableBody displayrowcheckbox="false" style={tableStyle.cells}>
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
