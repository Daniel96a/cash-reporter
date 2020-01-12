import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { EditReportButton } from "./edit/EditReportButton";
import { detailsDialog } from "../../../styles/Styles";
export const ReportDetails = props => {
  const styles = detailsDialog();
  const handleClose = () => {
    props.setShowReportDetails(false);
  };

  return (
    <Dialog
      open={props.showReportDetails}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      className={styles.root}
    >
      <EditReportButton
        reportSelected={props.reportSelected}
        setReportSelected={props.setReportSelected}
        updateReport={props.updateReport}
        deleteReport={props.deleteReport}
        setShowReportDetails={props.setShowReportDetails}
      />
      <DialogTitle id="max-width-dialog-title" className="align-text-center">
        Report details
      </DialogTitle>
      <DialogContent>
        <TextField
          style={halfWidth}
          floatingLabelText="First name"
          name="firstname"
          variant="filled"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          defaultValue={props.reportSelected.firstname}
          readOnly
        />
        <TextField
          style={halfWidth}
          floatingLabelText="Last name"
          name="lastname"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          defaultValue={props.reportSelected.lastname}
          variant="filled"
          readOnly
        />
        <TextField
          floatingLabelText="Report ID"
          name="reportid"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          defaultValue={props.reportSelected.id}
          variant="filled"
          readOnly
        />
        <TextField
          floatingLabelText="Phone"
          name="phonenr"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          defaultValue={props.reportSelected.phonenr}
          readOnly
        />
        <TextField
          floatingLabelText="Email"
          name="email"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          defaultValue={props.reportSelected.email}
          readOnly
        />
        <TextField
          floatingLabelText="Address"
          name="address"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          defaultValue={props.reportSelected.address}
          readOnly
        />
      </DialogContent>
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