import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { detailsDialog } from "../../../../styles/Styles";

export const EditReport = props => {
  const styles = detailsDialog();

  const report = {
    firstname: props.reportSelected.firstname,
    lastname: props.reportSelected.lastname,
    id: props.reportSelected.id,
    orgnr: props.reportSelected.orgnr,
    address: props.reportSelected.address,
    phonenr: props.reportSelected.phonenr,
    email: props.reportSelected.email.toLowerCase()
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

          defaultValue={props.reportSelected.firstname}
          disabled
        />
        <TextField
          style={halfWidth}
          floatingLabelText="Last name"
          name="lastname"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}

          defaultValue={props.reportSelected.lastname}
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

          defaultValue={props.reportSelected.phonenr}
          onChange={e => (report.phonenr = e.target.value)}
        />
        <TextField
          floatingLabelText="Email"
          name="email"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}

          defaultValue={props.reportSelected.email}
          onChange={e => (report.email = e.target.value)}
        />
        <TextField
          floatingLabelText="Address"
          name="address"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}

          defaultValue={props.reportSelected.address}
          onChange={e => (report.address = e.target.value)}
        />
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
