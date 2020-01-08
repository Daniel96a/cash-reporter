import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { BLUE, WHITE } from "../../../../colorTheme/colors";
import { EditCustomerButton } from "./edit/EditCustomerButton";

export const CustomerDetails = props => {
  const classes = useStyles();
  const handleClose = () => {
    props.setShowCustomerDetails(false);
  };

  return (
    <Dialog
      open={props.showCustomerDetails}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      className={classes.root}
    >
      <EditCustomerButton
        customerSelected={props.customerSelected}
        setCustomerSelected={props.setCustomerSelected}
        updateCustomer={props.updateCustomer}
        deleteCustomer={props.deleteCustomer}
        setShowCustomerDetails={props.setShowCustomerDetails}
      />
      <DialogTitle id="max-width-dialog-title" className="align-text-center">
        Customer details
      </DialogTitle>
      <DialogContent>
        <TextField
          style={halfWidth}
          floatingLabelText="First name"
          name="firstname"
          variant="filled"
          defaultValue={props.customerSelected.firstname}
          readOnly
        />
        <TextField
          style={halfWidth}
          floatingLabelText="Last name"
          name="lastname"
          defaultValue={props.customerSelected.lastname}
          variant="filled"
          readOnly
        />
        <TextField
          floatingLabelText="Customer ID"
          name="customerid"
          fullWidth
          defaultValue={props.customerSelected.id}
          variant="filled"
          readOnly
        />
        <TextField
          floatingLabelText="Phone"
          name="phonenr"
          fullWidth
          defaultValue={props.customerSelected.phonenr}
          readOnly
        />
        <TextField
          floatingLabelText="Email"
          name="email"
          fullWidth
          defaultValue={props.customerSelected.email}
          readOnly
        />
        <TextField
          floatingLabelText="Address"
          name="address"
          fullWidth
          defaultValue={props.customerSelected.address}
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

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 40,
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
    },
    "& .MuiDialogTitle-root": {
      backgroundColor: BLUE,
      color: WHITE
    }
  }
}));