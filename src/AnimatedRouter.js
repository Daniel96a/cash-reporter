import React, { useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";
import { Router, Location, globalHistory, navigate } from "@reach/router";
import { animated, config as reactSpringConfig } from "react-spring/web.cjs";
import { Transition } from "react-spring/renderprops.cjs";

/* animated router experiment */
const AnimatedRouter = ({ children, basePath, isAuthenticated,user }) => {
  const POP = "POP";
  const PUSH = "PUSH";

  const getLevel = (pathname) =>
    [...pathname].filter((char) => char === "/").length;
  const [lastPathLevel, setLastPathLevel] = useState(
    getLevel(globalHistory.location.pathname)
  );
  const baseStyles = {
    position: "fixed",
    right: 0,
    left: 0,
  };
  useEffect(() => {
    if (!isEmpty(user)) {
      if (window.location.pathname === "/" || window.location.pathname === "/login") {
        navigate("/dashboard");
      }
    } else {
      if (window.location.pathname !== "/login") {
        navigate("/login");
      }
    }
  });

  return (
    <Location>
      {({ location }) => {
        const currentLevel = getLevel(location.pathname);
        const routeChangeType = lastPathLevel > currentLevel ? POP : PUSH;
        setLastPathLevel(currentLevel);

        return (
          <Transition
            items={location}
            keys={(location) => location.key}
            initial={baseStyles}
            config={{ ...reactSpringConfig.stiff, clamp: true }}
            from={{
              ...baseStyles,
              transform:
                routeChangeType === POP
                  ? "translate3d(-100%, 0, 0)"
                  : "translate3d(100%, 0, 0)",
              opacity: 0,
            }}
            enter={{ transform: "translate3d(0%, 0, 0)", opacity: 1 }}
            leave={{
              transform:
                routeChangeType === POP
                  ? "translate3d(80%, 0, 0)"
                  : "translate3d(-80%, 0, 0)",
              opacity: 0,
            }}
          >
            {(location) => (props) => (
              <animated.div style={props}>
                <Router basepath={basePath} primary={false} location={location}>
                  {children}
                </Router>
              </animated.div>
            )}
          </Transition>
        );
      }}
    </Location>
  );
};

export default AnimatedRouter;
