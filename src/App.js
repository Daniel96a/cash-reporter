import React from "react";
import { connect } from "react-redux";
import LoginPage from "./pages/LoginPage";
import MainHeader from "./components/main/MainHeader";
import AnimatedRouter from "./AnimatedRouter";
import isEmpty from "lodash/isEmpty";
import UsersView from "./components/main/users/UsersView";
import BottomNavBar from "./components/main/BottomNavBar";
import Profile from "./components/main/dashboard/Profile";
import ReportsView from "./components/main/reports/ReportsView";
import { Redirect, navigate } from "@reach/router";
import ProtectedRoute from "./protected.route";

const App = (props) => {
  if (isEmpty(props.user)) {
    navigate("/login");
  }
  return (
    <>
      <MainHeader
        isAuthenticated={props.isAuthenticated}
        showCase={props.selectedView}
      />
      <AnimatedRouter basePath={""}>
        {props.isAuthenticated || !isEmpty(props.user) ? (
          <>
            <Profile path={"/dashboard"} />
            <UsersView path={"/users"} />
            <ReportsView path={"/reports"} />
          </>
        ) : null}
      <LoginPage path={"/login"} />
      </AnimatedRouter>
      {props.isAuthenticated || !isEmpty(props.user) ? (
        <BottomNavBar default />
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps)(App);
