import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { fetchCompany } from "../../../redux/actions/company";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const CompanyList = (props) => {
  const classes = useStyles();
  const [company, setcompany] = React.useState("");

  React.useEffect(() => {
    props.fetchCompany();
    // eslint-disable-next-line
  }, []);

  const handleChange = (event) => {
    setcompany(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>Choose Company</InputLabel>
        {props.company.length > 0 && (
          <Select
            labelId="Choose-Company-select-label"
            id="Choose-Company-select"
            value={company}
            onChange={handleChange}
          >
            <MenuItem value="">None</MenuItem>
            {props.company.map((company, index) => (
              <MenuItem key={index} value={company.companyid}>
                {company.company}
              </MenuItem>
            ))}
          </Select>
        )}
      </FormControl>
    </div>
  );
};
const mapstateToProps = (state) => ({
  company: state.company.company,
});
export default connect(mapstateToProps, { fetchCompany })(CompanyList);
