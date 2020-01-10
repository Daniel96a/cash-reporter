import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { CustomerDetails } from "./CustomerDetails";
import { Pressable } from "../../../../pressable/Pressable";
import { EditCustomer } from "./edit/EditCustomer";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 600,
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
    "& .MuiTouchRipple-root": {
      borderBottom: "1px solid lightgrey"
    }
  }
}));

const CustomerList = props => {
  const classes = useStyles();
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);

  const [customerSelected, setCustomerSelected] = useState(null);

  const [showEditCustomer, setShowEditCustomer] = useState(false);
  const openEdit = e => {
    setCustomerSelected(e.currentTarget.id);
    setShowEditCustomer(true);
  };
  const openDetails = e => {
    setCustomerSelected(e.currentTarget.id);
    setShowCustomerDetails(true);
  };

  return (
    <div>
      {customerSelected !== null && showCustomerDetails && (
        <CustomerDetails
          customers={props.customers.customers}
          customerSelected={customerSelected}
          setCustomerSelected={setCustomerSelected}
          showCustomerDetails={showCustomerDetails}
          setShowCustomerDetails={setShowCustomerDetails}
          updateCustomer={props.updateCustomer}
          deleteCustomer={props.deleteCustomer}
        />
      )}
      {showEditCustomer && (
        <EditCustomer
          customers={props.customers.customers}
          customerSelected={customerSelected}
          setCustomerSelected={setCustomerSelected}
          updateCustomer={props.updateCustomer}
          deleteCustomer={props.deleteCustomer}
          ƒ
          setShowEditCustomer={setShowEditCustomer}
        />
      )}
      {props.customers.customers.length > 0 && (
        <List dense className={classes.root} disablePadding>
          {props.customers.customers.map((customer, index) => (
            <Pressable
              id={index}
              key={index}
              onClick={openDetails.bind(this)}
              onPress={openEdit.bind(this)}
            >
              <ListItem
                id={index}
                className={`customerid-${customer.id}`}
                key={index}
                button
              >
                <ListItemAvatar>
                  <Avatar alt={`Avatar n°${customer}`} />
                </ListItemAvatar>
                <ListItemText
                  primary={`Customer ID = ${customer.id}
                ${customer.firstname}`}
                  secondary={`Phone number: ${customer.phonenr}`}
                />
              </ListItem>
            </Pressable>
          ))}
        </List>
      )}
      {props.customers.customers.length === 0 && <p>No customers found</p>}
    </div>
  );
};
export default CustomerList;
