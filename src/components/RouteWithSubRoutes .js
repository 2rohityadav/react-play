import React from "react";
import { Route } from "react-router-dom";

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <switch>
        <route.component {...props} routes={route.routes} />
      </switch>
    )}
  />
);

export default RouteWithSubRoutes;
