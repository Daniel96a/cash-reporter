import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProfileCard from "../components/main/dashboard/ProfileCard";

const DashboardPage = () => {
  return (
    <>
      <ProfileCard />
    </>
  );
};

DashboardPage.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
