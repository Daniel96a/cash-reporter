import React, { useState } from "react";
import {
  TextField,
  DialogTitle,
  DialogContent,
  Dialog,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import { detailsDialog, tableStyle } from "../../../../styles/Styles";
import { addReport } from "../../../../redux/actions/reports";
import { DARK } from "../../../../colorTheme/colors";
import { connect } from "react-redux";

const AddReport = props => {
  const styles = detailsDialog();
  const [inFives, setInFives] = useState(0);
  const [inTens, setInTens] = useState(0);
  const [inTwenties, setInTwenties] = useState(0);
  const [inFifties, setInFifties] = useState(0);
  const [inHundreds, setInHundreds] = useState(0);
  const [inExcange, setInExchange] = useState(0);
  const [inSum, setInSum] = useState(0);
  const [outFives, setOutFives] = useState(0);
  const [outTens, setOutTens] = useState(0);
  const [outTwenties, setOutTwenties] = useState(0);

  const [outFifties, setOutFifties] = useState(0);
  const [outHundreds, setOutHundreds] = useState(0);
  const [outExcange, setOutExchange] = useState(0);
  const [outSum, setOutSum] = useState(0);

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

  const inRow = [createData("In", 0, 0, 0, 0, 0, 0, 0)];
  const outRow = [createData("Out", 0, 0, 0, 0, 0, 0, 0)];
  const difRow = [createData("Dif", 0, 0, 0, 0, 0, 0, 0)];

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
      <DialogContent className={styles.label}>
        <TextField
          label="Employee sign"
          name="employeesign"
          color="white"
          onChange={e => (report.employeesign = e.target.value)}
        />
        <TextField
          label="Customer sign"
          name="customersign"
          onChange={e => (report.customersign = e.target.value)}
          defaultValue={report.customersign}
        />
        <TextField
          label="Table name"
          name="tablename"
          onChange={e => (report.tablename = e.target.value)}
        />
        <TextField
          label="Location"
          name="location"
          onChange={e => (report.location = e.target.value)}
        />
        <TextField
          label="Cash flow"
          name="cashflow"
          type="number"
          required
          onChange={e => (report.cashflow = e.target.value)}
        />
        <TextField
          label="Digital cash flow"
          name="digitalcashflow"
          type="number"
          required
          onChange={e => (report.digitalcashflow = e.target.value)}
        />
        <TextField
          label="Payment"
          name="payment"
          type="number"
          required
          onChange={e => (report.payment = e.target.value)}
        />
        <TextField
          label="Revenue"
          name="revenue"
          type="number"
          required
          onChange={e => (report.revenue = e.target.value)}
        />
        <TextField
          label="Extra info"
          name="infofield"
          multiLine
          onChange={e => (report.infofield = e.target.value)}
        />

        <TextField
          label="Status"
          name="status"
          onChange={e => (report.status = e.target.value)}
        />

        <TableContainer
          style={{ backgroundColor: DARK, margin: "20px 0px 20px 0px" }}
        >
          <Table className={tableStyle.table} aria-label="simple table">
            <TableBody displayrowcheckbox="false" className={tableStyle.cells}>
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
              {inRow.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.five}`}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                      onChange={e => setInFives(e.target.value)}
                      defaultValue={inFives}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.ten}`}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                      onChange={e => setInTens(e.target.value)}
                      defaultValue={inTens}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.twenty}`}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                      onChange={e => setInTwenties(e.target.value)}
                      defaultValue={inTwenties}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.fifty}`}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                      onChange={e => setInFifties(e.target.value)}
                      defaultValue={inFifties}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.oneHundred}`}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                      onChange={e => setInHundreds(e.target.value)}
                      defaultValue={inHundreds}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.exchage}`}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                      onChange={e => setInExchange(e.target.value)}
                      defaultValue={inExcange}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.summary}`}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      style={{ width: "40px" }}
                      type="number"
                      onChange={e => setInSum(e.target.value)}
                      defaultValue={inSum}
                    />
                  </TableCell>
                </TableRow>
              ))}
              {outRow.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.five}`}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                      onChange={e => setOutFives(e.target.value)}
                      defaultValue={inFives}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.ten}`}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                      onChange={e => setOutTens(e.target.value)}
                      defaultValue={outTens}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.twenty}`}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                      onChange={e => setOutTwenties(e.target.value)}
                      defaultValue={outTwenties}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.fifty}`}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                      onChange={e => setOutFifties(e.target.value)}
                      defaultValue={outFifties}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.oneHundred}`}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                      onChange={e => setOutHundreds(e.target.value)}
                      defaultValue={outHundreds}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.exchage}`}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                      onChange={e => setOutExchange(e.target.value)}
                      defaultValue={outExcange}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.summary}`}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      style={{ width: "40px" }}
                      type="number"
                      onChange={e => setOutSum(e.target.value)}
                      defaultValue={outSum}
                    />
                  </TableCell>
                </TableRow>
              ))}
              {difRow.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.five}`}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      readOnly
                      type="number"
                      value={outFives - inFives}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.ten}`}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                      readOnly
                      value={outTens - inTens}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.summary}`}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      style={{ width: "40px" }}
                      type="number"
                      readOnly
                      value={outTwenties - inTwenties}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.twenty}`}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                      readOnly
                      value={outFifties - inFifties}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.fifty}`}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                      readOnly
                      value={outHundreds - inHundreds}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.oneHundred}`}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                      readOnly
                      value={outExcange - inExcange}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.exchage}`}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      type="number"
                      readOnly
                      value={outSum - inSum}
                    />
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

const mapStateToProps = state => ({
  customers: state.customers
});
export default connect(mapStateToProps, {
  addReport
})(AddReport);
