import React from "react";
import { connect } from "react-redux";
import LoginPage from "./pages/LoginPage";
import MainHeader from "./components/main/MainHeader";
import AnimatedRouter from "./AnimatedRouter";
import UsersView from "./components/main/users/UsersView";
import BottomNavBar from "./components/main/BottomNavBar";
import Profile from "./components/main/dashboard/Profile";
import ReportsView from "./components/main/reports/ReportsView";

const App = ({ isAuthenticated, user, selectedView }) => {
  return (
    <>
      <MainHeader isAuthenticated={isAuthenticated} showCase={selectedView} />
      <AnimatedRouter basePath={""} user={user}>
        {isAuthenticated && (
          <>
            <Profile path={"/dashboard"} />
            <UsersView path={"/users"} />
            <ReportsView path={"/reports"} />
          </>
        )}
        <LoginPage path={"/login"} isAuthenticated={isAuthenticated} />
      </AnimatedRouter>

      {isAuthenticated && <BottomNavBar default />}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps)(App);
