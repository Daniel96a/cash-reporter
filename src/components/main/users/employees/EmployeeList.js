import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import EmployeeDetails from "./EmployeeDetails";
import { fetchEmployeeList } from "../../../../redux/actions/employees";
import EditEmployee from "./edit/EditEmployee";
import { listStyle } from "../../../../styles/Styles";
import { connect } from "react-redux";
import { isMobile } from "react-device-detect";

const EmployeeList = (props) => {
  const styles = listStyle();
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);
  const [employeeSelected, setEmployeeSelected] = useState(null);
  const [showEditEmployee, setShowEditEmployee] = useState(false);

  useEffect(() => {
    props.fetchEmployeeList();
    // eslint-disable-next-line
  }, []);
  const openDetails = (e) => {
    setEmployeeSelected(e.currentTarget.id);
    setShowEmployeeDetails(true);
  };
  return (
    <div style={{ marginBottom: isMobile ? 116 : 0 }}>
      {employeeSelected !== null && (
        <EmployeeDetails
          employeeSelected={employeeSelected}
          setEmployeeSelected={setEmployeeSelected}
          showEmployeeDetails={showEmployeeDetails}
          setShowEmployeeDetails={setShowEmployeeDetails}
        />
      )}
      {showEditEmployee && (
        <EditEmployee
          employeeSelected={employeeSelected}
          setEmployeeSelected={setEmployeeSelected}
          setShowEditEmployee={setShowEditEmployee}
        />
      )}

      {props.employees.employees.length > 0 && (
        <List dense className={styles.root} disablePadding>
          <div style={{ marginBottom: 5 }}>
            {props.employees.employees.map((employee, index) => (
              <ListItem
                id={index}
                key={index}
                className={`personid-${employee.personid} employeeListItem`}
                onClick={openDetails.bind(this)}
                button
              >
                <ListItemAvatar className={styles.large}>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText
                  primary={employee.fullname}
                  secondary={`Phone number: ${employee.phonenr}`}
                />
              </ListItem>
            ))}
          </div>
        </List>
      )}
      {props.employees.employees.length === 0 && <p>No employees found</p>}
    </div>
  );
};
const mapStateToProps = (state) => ({
  employees: state.employees,
});
export default connect(mapStateToProps, { fetchEmployeeList })(EmployeeList);
