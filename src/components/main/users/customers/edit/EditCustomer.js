import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { detailsDialog } from "../../../../../styles/Styles";
import { updateCustomer } from "../../../../../actions/customers";
import { connect } from "react-redux";

const EditCustomer = props => {
  const styles = detailsDialog();
  const customer = props.customers.customers[props.customerSelected];
  const customerData = {
    firstname: customer.firstname,
    lastname: customer.lastname,
    id: customer.id,
    orgnr: customer.orgnr,
    address: customer.address,
    phonenr: customer.phonenr,
    email: customer.email.toLowerCase()
  };

  const updateCustomer = e => {
    document.getElementsByName("firstname")[0].value = customerData.firstname;
    document.getElementsByName("lastname")[0].value = customerData.lastname;

    document.getElementsByName("address")[0].value = customerData.address;
    document.getElementsByName("phonenr")[0].value = customerData.phonenr;
    document.getElementsByName("email")[0].value = customerData.email;
    props.setShowEditCustomer(false);
    props.updateCustomer(customerData);
  };

  const handleClose = () => {
    props.setShowEditCustomer(false);
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      className={styles.root}
    >
      <DialogTitle id="max-width-dialog-title" className="align-text-center">
        Edit Customer
      </DialogTitle>
      <DialogContent>
        <TextField
          style={halfWidth}
          floatingLabelText="First name"
          name="firstname"
          variant="filled"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
          defaultValue={customer.firstname}
          onChange={e => (customerData.firstname = e.target.value)}
        />
        <TextField
          style={halfWidth}
          floatingLabelText="Last name"
          name="lastname"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
          defaultValue={customer.lastname}
          onChange={e => (customerData.lastname = e.target.value)}
          variant="filled"
        />
        <TextField
          floatingLabelText="Customer ID"
          name="customerid"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
          defaultValue={customer.id}
          variant="filled"
          disabled
        />
        <TextField
          floatingLabelText="Phone"
          name="phonenr"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
          defaultValue={customer.phonenr}
          onChange={e => (customerData.phonenr = e.target.value)}
        />
        <TextField
          floatingLabelText="Email"
          name="email"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
          defaultValue={customer.email}
          onChange={e => (customerData.email = e.target.value)}
        />
        <TextField
          floatingLabelText="Address"
          name="address"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
          defaultValue={customer.address}
          onChange={e => (customerData.address = e.target.value)}
        />
      </DialogContent>
      <Button onClick={updateCustomer.bind(this)} color="primary">
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
  customers: state.customers
});
export default connect(mapStateToProps, {
  updateCustomer
})(EditCustomer);
