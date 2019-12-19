import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 490,
    margin: "auto",
    backgroundColor: theme.palette.background.paper
  }
}));

const CustomerList = props => {
  const classes = useStyles();
  const [checked, setChecked] = useState([1]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div className="align-text-center">
      <h3>Customer List</h3>
      <hr />
      <List dense className={classes.root}>
        {props.customers.customers !== null &&
          props.customers.customers.map(customer => {
            const labelId = `checkbox-list-secondary-label-${customer}`;
            return (
              <ListItem key={customer.id} button>
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${customer.id}`}
                    src={`/static/images/avatar/${customer.id}.jpg`}
                  />
                </ListItemAvatar>
                <ListItemText
                  id={labelId}
                  primary={`Customer ID = ${customer.id}`}
                />
                <ListItemSecondaryAction>
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(customer)}
                    checked={checked.indexOf(customer) !== -1}
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};
export default CustomerList;
