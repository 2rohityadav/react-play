// rce rconst
import React from "react";
import { NavLink } from "react-router-dom";
import RouteWithSubRoutes from "./RouteWithSubRoutes ";

const Home = ({ routes }) => (
  <div>
    <div className="nav-home">
      <NavLink to="/home/youtube" activeClassName="active">
        Youtube
      </NavLink>
      <NavLink to="/home/markdown" activeClassName="active">
        Markdown
      </NavLink>
      <NavLink to="/home/countdown" activeClassName="active">
        Countdown
      </NavLink>
    </div>
    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </div>
);

export default Home;
