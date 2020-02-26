import React from "react";
import { Button, CardContent, Typography, Card } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { connect } from "react-redux";
import { profileStyle } from "../../../styles/Styles";

const Profile = props => {
  const styles = profileStyle();

  return (
    <Card className={styles.root}>
      <CardContent>
        <Typography className={styles.title} color="textSecondary" gutterBottom>
          Welcome {"User"}
        </Typography>
        <Button
          aria-label="Edit and Delete"
          color="primary"
          className={styles.button}
        >
          <SettingsIcon fill="primary" />
        </Button>
        <hr className={styles.hr} />
        <Typography className={styles.title} color="textSecondary" gutterBottom>
          Status {"Admin"}
        </Typography>
      </CardContent>
    </Card>
  );
};
const mapStateToProps = state => ({
  user: state.auth.user
});
export default connect(mapStateToProps)(Profile);
