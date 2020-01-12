import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { EditCustomerButton } from "./edit/EditCustomerButton";
import { detailsDialog } from "../../../../styles/Styles";
export const CustomerDetails = props => {
  const styles = detailsDialog();
  const handleClose = () => {
    props.setShowCustomerDetails(false);
  };
  const customer = props.customers[props.customerSelected];

  return (
    <Dialog
      open={props.showCustomerDetails}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      className={styles.root}
    >
      <EditCustomerButton
        customers={props.customers}
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
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          defaultValue={customer.firstname}
          readOnly
        />
        <TextField
          style={halfWidth}
          floatingLabelText="Last name"
          name="lastname"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          defaultValue={customer.lastname}
          variant="filled"
          readOnly
        />
        <TextField
          floatingLabelText="Customer ID"
          name="customerid"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          defaultValue={customer.id}
          variant="filled"
          readOnly
        />
        <TextField
          floatingLabelText="Phone"
          name="phonenr"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          defaultValue={customer.phonenr}
          readOnly
        />
        <TextField
          floatingLabelText="Email"
          name="email"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          defaultValue={customer.email}
          readOnly
        />
        <TextField
          floatingLabelText="Address"
          name="address"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          defaultValue={customer.address}
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