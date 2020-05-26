import React, { useState } from "react";
import {
  DialogTitle,
  DialogContent,
  TextField,
  Dialog,
  Button,
} from "@material-ui/core";
import { detailsDialog } from "../../../../../styles/Styles";
import { addPerson } from "../../../../../redux/actions/person";
import { connect } from "react-redux";
import CompanyList from "../../../company/CompanyList";

const AddCustomer = ({ toggleShowAddCustomer, addPerson, showAddCustomer }) => {
  const styles = detailsDialog();
  const [companyid, setCompanyid] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [salt, setSalt] = useState("");
  const [phonenr, setPhonenr] = useState("");
  const [email, setEmail] = useState("");

  const customer = {
    personid: null,
    firstname: firstname,
    lastname: lastname,
    phonenr: phonenr,
    email: email.toLowerCase(),
    roleid: 2,
    companyid: companyid,
    username: username,
    password: password,
    salt: salt,
  };

  const createCustomer = (e) => {
    addPerson(customer);
    toggleShowAddCustomer(false);
    e.preventDefault();
  };

  const handleClose = () => {
    toggleShowAddCustomer(false);
  };

  return (
    <Dialog
      open={showAddCustomer}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      className={styles.root}
    >
      <DialogTitle id="max-width-dialog-title" className="align-text-center">
        Add Customer
      </DialogTitle>
      <DialogContent className={styles.label}>
        <form onSubmit={createCustomer}>
          <div
            style={{
              marginBottom: 116,
              overflow: "auto",
            }}
          >
            <TextField
              label="Enter first name"
              name="firstname"
              required={true}
              onChange={(e) => setFirstname(e.target.value)}
              defaultValue={firstname}
            />
            <TextField
              label="Enter last name"
              name="lastname"
              required={true}
              onChange={(e) => setLastname(e.target.value)}
              defaultValue={lastname}
            />
            <TextField
              label="Enter phone number"
              name="phonenr"
              onChange={(e) => setPhonenr(e.target.value)}
              defaultValue={phonenr}
            />
            <TextField
              label="Enter mail"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={email}
            />
            <CompanyList
              onChange={(e) => setCompanyid(e.target.value)}
              defaultValue={companyid}
            />
            <TextField
              label="Enter username"
              name="username"
              required={true}
              onChange={(e) => setUsername(e.target.value)}
              defaultValue={username}
            />
            <TextField
              label="Enter new password"
              name="password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
              defaultValue={password}
            />
            <TextField
              label="Enter salt"
              name="salt"
              required={true}
              onChange={(e) => setSalt(e.target.value)}
              defaultValue={salt}
            />
          </div>
          <div className="buttons">
            <Button variant="contained" color="primary" type="submit">
              Add Customer
            </Button>
            <Button variant="contained" onClick={handleClose} color="primary">
              Close
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  person: state.person,
});
export default connect(mapStateToProps, {
  addPerson,
})(AddCustomer);
