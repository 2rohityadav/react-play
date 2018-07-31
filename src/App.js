import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import routes from "./RouteConfig";
import RouteWithSubRoutes from "./components/RouteWithSubRoutes ";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="nav">
            <NavLink to="/home" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/other" activeClassName="active">
              Other Projects
            </NavLink>
          </div>
        </header>
        <div className="App-intro">
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
      </div>
    );
  }
}

export default App;
