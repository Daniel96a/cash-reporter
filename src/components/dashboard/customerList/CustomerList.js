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
    maxWidth: "490px",
    margin: "auto",
    backgroundColor: theme.palette.background.paper
  }
}));

const CustomerList = props => {
  const classes = useStyles();
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [customerSelected, setcustomerSelected] = useState(null);

  const openDetails = e => {
    setcustomerSelected(props.customers.customers[e.currentTarget.id]);
    setShowCustomerDetails(true);
  };
  return (
    <React.Fragment>
      {customerSelected !== null && (
        <CustomerDetails
          customers={props.customers.customers}
          customerSelected={customerSelected}
          showCustomerDetails={showCustomerDetails}
          setShowCustomerDetails={setShowCustomerDetails}
        />
      )}
      <List dense className={classes.root}>
        {props.customers.customers.map((customer, index) => (
          <ListItem
            id={index}
            key={index}
            button
            onClick={openDetails.bind(this)}
          >
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${customer}`}
                src={`/static/images/avatar/${customer.id}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText
              primary={`Customer ID = ${customer.id}
            ${customer.firstname}`}
              secondary={`Phone number: ${customer.phonenr}`}
            />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};
export default CustomerList;
