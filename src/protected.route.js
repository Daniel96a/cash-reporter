import React from "react";
import isEmpty from "lodash/isEmpty";
import { Redirect } from "@reach/router";

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  user,
  redirectTo,
  ...props
}) => {
  if (isAuthenticated || !isEmpty(user)) {
    return <Component {...props} />;
  } else {
    return <Redirect to={redirectTo} from={"/"} noThrow/>;
  }
};

export default ProtectedRoute;
