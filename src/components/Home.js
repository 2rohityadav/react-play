// rce rconst
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import RouteWithSubRoutes from "./RouteWithSubRoutes ";

const Home = ({ routes }) => (
  <div>
    <div className="nav">
      <NavLink to="/home/youtube" activeClassName="active">
        Youtube
      </NavLink>
      <NavLink to="/home/markdown" activeClassName="active">
        Markdown
      </NavLink>
    </div>
    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </div>
);

export default Home;
