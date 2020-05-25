import React from "react";
import isEmpty from "lodash/isEmpty";
import { Redirect } from "@reach/router";

const ProtectedRoute = ({
  component: Component,
  user,
  redirectTo,
  ...props
}) => {
  if (!isEmpty(user)) {
    return <Component {...props} />;
  } else {
    return <Redirect to={redirectTo} from={"/"} noThrow />;
  }
};

export default ProtectedRoute;
