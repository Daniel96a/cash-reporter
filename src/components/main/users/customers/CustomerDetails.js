import React from "react";
import {
  DialogTitle,
  DialogContent,
  TextField,
  Dialog,
  Button
} from "@material-ui/core";
import { EditCustomerButton } from "./edit/EditCustomerButton";
import { detailsDialog } from "../../../../styles/Styles";
import { connect } from "react-redux";

const CustomerDetails = props => {
  const styles = detailsDialog();
  const handleClose = () => {
    props.setShowCustomerDetails(false);
    props.setCustomerSelected(null)
  };
  const customer = props.customers.customers[props.customerSelected];

  return (
    <Dialog
      open={props.showCustomerDetails}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      className={styles.root}
    >
      <EditCustomerButton
        customerSelected={props.customerSelected}
        setCustomerSelected={props.setCustomerSelected}
        setShowCustomerDetails={props.setShowCustomerDetails}
      />
      <DialogTitle id="max-width-dialog-title" className="align-text-center">
        Customer details
      </DialogTitle>
      <DialogContent className={styles.label}>
        <TextField
          label="Full name"
          name="fullname"
          defaultValue={customer.fullname}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          label="Phone"
          name="phonenr"
          defaultValue={customer.phonenr}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          label="Email"
          name="email"
          defaultValue={customer.email}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          label="Company"
          name="company"
          defaultValue={customer.company}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          label="Organisation number"
          name="orgnr"
          defaultValue={customer.orgnr}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          label="Street"
          name="street"
          defaultValue={customer.street}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          label="City"
          name="city"
          defaultValue={customer.city}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          label="Zip-code"
          name="zipcode"
          defaultValue={customer.zipcode}
          InputProps={{
            readOnly: true
          }}
        />
      </DialogContent>
      <Button variant="contained" onClick={handleClose}>
        Close
      </Button>
    </Dialog>
  );
};
const mapStateToProps = state => ({
  customers: state.customers
});
export default connect(mapStateToProps)(CustomerDetails);
