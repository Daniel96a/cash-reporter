import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { CustomerDetails } from "./CustomerDetails";

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

  const openDetails = e => {
    setCustomerSelected(props.customers.customers[e.currentTarget.id]);
    setShowCustomerDetails(true);
  };
  return (
    <React.Fragment>
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
      {props.customers !== undefined && (
        <List dense className={classes.root}>
          {props.customers.customers.map((customer, index) => (
            <ListItem
              id={index}
              className={`customerid-${customer.id}`}
              key={index}
              button
              onClick={openDetails.bind(this)}
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
          ))}
        </List>
      )}
    </React.Fragment>
  );
};
export default CustomerList;
