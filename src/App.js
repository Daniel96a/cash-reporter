import React from "react";
import { connect } from "react-redux";
import LoginPage from "./pages/LoginPage";
import MainHeader from "./components/main/MainHeader";
import AnimatedRouter from "./AnimatedRouter";
import UsersView from "./components/main/users/UsersView";
import BottomNavBar from "./components/main/BottomNavBar";
import Profile from "./components/main/dashboard/Profile";
import ReportsView from "./components/main/reports/ReportsView";
import { changeView } from "./redux/actions/states";

const App = ({
  isAuthenticated,
  user,
  changeView,
  states: { selectedView },
}) => {
  return (
    <>
      <MainHeader isAuthenticated={isAuthenticated} />

      <AnimatedRouter basePath={""} user={user} changeView={changeView}>
        {isAuthenticated ? (
          <>
            <Profile path={"/dashboard"} />
            <UsersView path={"/users"} />
            <ReportsView path={"/reports"} />
          </>
        ) : (
          <LoginPage path={"/login"} isAuthenticated={isAuthenticated} />
        )}
      </AnimatedRouter>
      {isAuthenticated && <BottomNavBar selectedView={selectedView} />}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  states: state.states,
});

export default connect(mapStateToProps, { changeView })(App);
