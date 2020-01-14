import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { CustomerDetails } from "./CustomerDetails";
import { EditCustomer } from "./edit/EditCustomer";
import { listStyle } from "../../../../styles/Styles";

const CustomerList = props => {
  const styles = listStyle();
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [customerSelected, setCustomerSelected] = useState(null);

  const [showEditCustomer, setShowEditCustomer] = useState(false);

  const openDetails = e => {
    setCustomerSelected(e.currentTarget.id);
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
      {showEditCustomer && (
        <EditCustomer
          customers={props.customers.customers}
          customerSelected={customerSelected}
          setCustomerSelected={setCustomerSelected}
          updateCustomer={props.updateCustomer}
          deleteCustomer={props.deleteCustomer}
          setShowEditCustomer={setShowEditCustomer}
        />
      )}
      {props.customers.customers.length > 0 && (
        <List dense className={styles.root} disablePadding>
          {props.customers.customers.map((customer, index) => (
            <ListItem
              id={index}
              className={`customerid-${customer.id} employeeListItem`}
              key={index}
              button
              onClick={openDetails.bind(this)}
            >
              <ListItemAvatar>
                <Avatar alt={`Avatar n°${customer}`} />
              </ListItemAvatar>
              <ListItemText
                primary={`${customer.firstname} ${customer.lastname}`}
                secondary={`Phone number: ${customer.phonenr}`}
              />
            </ListItem>
          ))}
        </List>
      )}
      {props.customers.customers.length === 0 && <p>No customers found</p>}
    </React.Fragment>
  );
};
export default CustomerList;
