import React from "react";
import { Button, CardContent, Typography, Card } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { connect } from "react-redux";
import { profileStyle } from "../../../styles/Styles";

const ProfileCard = ({ user: { username, role } }) => {
  const styles = profileStyle();

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card className={styles.root}>
        <CardContent>
          <Typography
            className={styles.title}
            color="textSecondary"
            gutterBottom
          >
            Welcome {username}
          </Typography>
          <Button
            aria-label="Edit and Delete"
            color="primary"
            className={styles.button}
          >
            <SettingsIcon fill="primary" />
          </Button>
          <hr className={styles.hr} />
          <Typography
            className={styles.title}
            color="textSecondary"
            gutterBottom
          >
            Status {role}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps, {})(ProfileCard);
