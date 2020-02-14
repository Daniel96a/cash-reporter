import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { detailsDialog, tableStyle } from "../../../../styles/Styles";
import { updateReport } from "../../../../redux/actions/reports";
import { connect } from "react-redux";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import { DARK } from "../../../../colorTheme/colors";

const EditReport = props => {
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
  const styles = detailsDialog();
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
  const report = {
    firstname: props.reports[props.reportSelected].firstname,
    lastname: props.reports[props.reportSelected].lastname,
    id: props.reports[props.reportSelected].id,
    orgnr: props.reports[props.reportSelected].orgnr,
    address: props.reports[props.reportSelected].address,
    phonenr: props.reports[props.reportSelected].phonenr,
    email: props.reports[props.reportSelected].email
  };

  const updateReport = e => {
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
      <DialogContent>
        <TextField
          style={halfWidth}
          floatingLabelText="First name"
          name="firstname"
          variant="filled"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={report.firstname}
          disabled
        />
        <TextField
          style={halfWidth}
          floatingLabelText="Last name"
          name="lastname"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={report.lastname}
          variant="filled"
          disabled
        />
        <TextField
          floatingLabelText="Report ID"
          name="reportid"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={props.reportSelected.id}
          variant="filled"
          disabled
        />
        <TextField
          floatingLabelText="Phone"
          name="phonenr"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={report.phonenr}
          onChange={e => (report.phonenr = e.target.value)}
        />
        <TextField
          floatingLabelText="Email"
          name="email"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={report.email}
          onChange={e => (report.email = e.target.value)}
        />
        <TextField
          floatingLabelText="Address"
          name="address"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={report.address}
          onChange={e => (report.address = e.target.value)}
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
                    {`${row.name}`}
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.five}`}
                      style={{ width: "40px" }}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      disabled
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
                      disabled
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
                      disabled
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
                      disabled
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
                      disabled
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
                      disabled
                      type="number"
                      onChange={e => setInExchange(e.target.value)}
                      defaultValue={inExcange}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name={`${row.summary}`}
                      inputStyle={{ color: "white", textAlign: "center" }}
                      disabled
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
                    {`${row.name}`}
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
                    {`${row.name}`}
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
      <Button onClick={updateReport.bind(this)} color="primary">
        Update
      </Button>
      <Button onClick={handleClose} color="secondary">
        Abort
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
export default connect(mapStateToProps, {
  updateReport
})(EditReport);
