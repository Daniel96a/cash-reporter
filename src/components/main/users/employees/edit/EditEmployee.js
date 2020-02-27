import React from "react";
import {
  TextField,
  Dialog,
  Button,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import { detailsDialog } from "../../../../../styles/Styles";
import { connect } from "react-redux";
import { updatePerson } from "../../../../../redux/actions/person";
import { updateEmployee } from "../../../../../redux/actions/employees";

export const EditEmployee = props => {
  const styles = detailsDialog();
  console.log(props.person)
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

  const update = e => {
    document.getElementsByName("firstname")[0].value = personData.firstname;
    document.getElementsByName("lastname")[0].value = personData.lastname;
    document.getElementsByName("email")[0].value = personData.email;
    document.getElementsByName("phonenr")[0].value = personData.phonenr;
    document.getElementsByName("fullname")[0].value =
      personData.firstname + " " + personData.lastname;
    props.setShowEditEmployee(false);
    const employeeData = {
      fullname: personData.firstname + " " + personData.lastname,
      role: personData.lastname,
      email: personData.email,
      phonenr: personData.phonenr,
      personid: personData.personid
    };
    props.updatePerson(personData);
    props.updateEmployee(employeeData);
  };

  const handleClose = () => {
    props.setShowEditEmployee(false);
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      className={styles.root}
    >
      <DialogTitle id="max-width-dialog-title" className="align-text-center">
        Edit Employee
      </DialogTitle>
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
      <Button onClick={update.bind(this)} color="primary">
        Update
      </Button>
      <Button onClick={handleClose} color="secondary">
        Abort
      </Button>
    </Dialog>
  );
};

const mapStateToProps = state => ({
  employees: state.employees,
  person: state.person.person
});
export default connect(mapStateToProps, {
  updatePerson,
  updateEmployee
})(EditEmployee);
