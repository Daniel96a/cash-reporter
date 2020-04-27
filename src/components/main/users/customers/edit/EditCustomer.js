import React, { useEffect } from "react";
import {
  TextField,
  Dialog,
  Button,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import {
  updatePerson,
  fetchPerson,
  clearPerson
} from "../../../../../redux/actions/person";
import { editDialog } from "../../../../../styles/Styles";
import { updateCustomer } from "../../../../../redux/actions/customers";
import { connect } from "react-redux";

const EditCustomer = props => {
  const styles = editDialog();
  const customer = props.customers.customers[props.customerSelected];
  const personData = {
    personid: props.person.personid,
    roleid: props.person.roleid,
    companyid: props.person.companyid,
    firstname: props.person.firstname,
    lastname: props.person.lastname,
    email: props.person.email,
    phonenr: props.person.phonenr,
    password: props.person.password,
    username: props.person.username,
    salt: props.person.salt
  };

  useEffect(() => {
    props.fetchPerson(customer.personid);
    return () => {
      props.clearPerson();
    };
    // eslint-disable-next-line
  }, []);
  const updateCustomer = e => {
    document.getElementsByName("firstname")[0].value = personData.firstname;
    document.getElementsByName("lastname")[0].value = personData.lastname;
    document.getElementsByName("email")[0].value = personData.email;
    document.getElementsByName("phonenr")[0].value = personData.phonenr;
    document.getElementsByName("fullname")[0].value =
      personData.firstname + " " + personData.lastname;
    const customerData = {
      fullname: personData.firstname + " " + personData.lastname,
      role: personData.lastname,
      email: personData.email,
      phonenr: personData.phonenr,
      personid: personData.personid
    };
    props.setShowEditCustomer(false);
    props.updatePerson(personData);
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
      {props.person.personid !== undefined && (
        <DialogContent className={styles.label}>
          <TextField
            label="First name"
            name="firstname"
            defaultValue={props.person.firstname}
            onChange={e => (personData.firstname = e.target.value)}
          />
          <TextField
            label="Last name"
            name="lastname"
            defaultValue={props.person.lastname}
            onChange={e => (personData.lastname = e.target.value)}
          />
          {/* <TextField
          label="Role"
          name="role"
          defaultValue={props.person.role}
          onChange={e => (personData.role = e.target.value)}
        /> */}
          <TextField
            label="Phone"
            name="phonenr"
            defaultValue={props.person.phonenr}
            onChange={e => (personData.phonenr = e.target.value)}
          />
          <TextField
            label="Email"
            name="email"
            defaultValue={props.person.email}
            onChange={e => (personData.email = e.target.value)}
          />
        </DialogContent>
      )}
      <Button variant="contained" onClick={updateCustomer.bind(this)}>Update</Button>
      <Button variant="contained" onClick={handleClose} color="secondary">
        Abort{" "}
      </Button>
    </Dialog>
  );
};

const mapStateToProps = state => ({
  customers: state.customers,
  person: state.person.person
});
export default connect(mapStateToProps, {
  updatePerson,
  updateCustomer,
  fetchPerson,
  clearPerson
})(EditCustomer);
