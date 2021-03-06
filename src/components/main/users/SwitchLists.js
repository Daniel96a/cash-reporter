import React, { useEffect } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import CustomerList from "./customers/CustomerList";
import EmployeeList from "./employees/EmployeeList";
import { switchListsStyle } from "../../../styles/Styles";
import { useWindowSize } from "../../../hooks/useWindowSize";
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
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export const SwitchLists = ({ showList }) => {
  const innerHeight = useWindowSize().height;
  const classes = switchListsStyle();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    let swipableView = document.getElementsByClassName(
      "react-swipeable-view-container"
    )[0];
    if (swipableView) {
      swipableView.style.height = `calc(${innerHeight}px - 154px)`;
    }
  }, [innerHeight]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    showList(index);
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
      >
        <Tab
          className={classes.color}
          onClick={(e) => showList(0)}
          label="Customers"
          {...a11yProps(0)}
        />
        <Tab
          className={classes.color}
          onClick={(e) => showList(1)}
          label="Employees"
          {...a11yProps(1)}
        />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <div value={value} index={0}>
          <CustomerList />
        </div>
        <div value={value} index={1}>
          <EmployeeList />
        </div>
      </SwipeableViews>
    </Paper>
  );
};
