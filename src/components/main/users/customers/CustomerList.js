import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import CustomerDetails from "./CustomerDetails";
import EditCustomer from "./edit/EditCustomer";
import { listStyle } from "../../../../styles/Styles";
import { fetchCustomerList } from "../../../../redux/actions/customers";
import { connect } from "react-redux";

const CustomerList = (props) => {
  const styles = listStyle();
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [showEditCustomer, setShowEditCustomer] = useState(false);
  const [customerSelected, setCustomerSelected] = useState(null);

  useEffect(() => {
    props.fetchCustomerList();
    // eslint-disable-next-line
  }, []);

  const openDetails = (e) => {
    setShowCustomerDetails(!showEditCustomer);
    setCustomerSelected(e.currentTarget.id);
    setShowCustomerDetails(true);
  };

  return (
    <>
      {customerSelected !== null && showCustomerDetails && (
        <CustomerDetails
          customerSelected={customerSelected}
          setCustomerSelected={setCustomerSelected}
          showCustomerDetails={showCustomerDetails}
          setShowCustomerDetails={setShowCustomerDetails}
        />
      )}
      {showEditCustomer && (
        <EditCustomer
          customerSelected={customerSelected}
          setCustomerSelected={setCustomerSelected}
          setShowEditCustomer={setShowEditCustomer}
        />
      )}
      {props.customers.customers.length > 0 && (
        <List dense className={styles.root} disablePadding>
          <div style={{ marginBottom: 10 }}>
            {props.customers.customers.map((customer, index) => (
              <ListItem
                id={index}
                className={`customerid-${customer.id} employeeListItem`}
                key={index}
                button
                onClick={openDetails.bind(this)}
              >
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText
                  primary={customer.fullname}
                  secondary={`Phone number: ${customer.phonenr}`}
                />
              </ListItem>
            ))}
          </div>
        </List>
      )}

      {props.customers.customers.length === 0 && <p>No reports found</p>}
    </>
  );
};
const mapStateToProps = (state) => ({
  customers: state.customers,
});
export default connect(mapStateToProps, {
  fetchCustomerList,
})(CustomerList);
