import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import CustomerList from "./customers/CustomerList";
import EmployeeList from "./employees/EmployeeList";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component={"div"}
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={1}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  color: {
    color: "lightgrey"
  },
  root: {
    backgroundColor: "transparent",
    position: "fixed",
    margin: "auto",
    top: "48px",
    right: "0px",
    left: "0px",
    bottom: "0px",
    maxWidth: 600
  }
}));

const swipeableViewsStyle = {
  position: "inherit",
  top: "98px",
  right: "0px",
  left: "0px",
  bottom: "0px",
  maxWidth: 600,
  margin: "auto"
};

export const SwitchLists = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    props.setSelectUserList(index);
    setValue(index);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="action tabs example"
      >
        <Tab
          className={classes.color}
          onClick={e => props.setSelectUserList(0)}
          label="Customers"
          {...a11yProps(0)}
        />
        <Tab
          className={classes.color}
          onClick={e => props.setSelectUserList(1)}
          label="Employees"
          {...a11yProps(1)}
        />
      </Tabs>
      <SwipeableViews
        style={swipeableViewsStyle}
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <CustomerList />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <EmployeeList />
        </TabPanel>
      </SwipeableViews>
    </Paper>
  );
};
