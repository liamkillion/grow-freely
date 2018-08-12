import React, { Component } from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import LandingContainer from "./containers/LandingContainer";
import ConsumerContainer from "./containers/ConsumerContainer";
import BusinessOwnerContainer from "./containers/BusinessOwnerContainer";
import FinancialContainer from "./containers/FinancialContainer";
import { Navbar, NavItem } from "react-materialize";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar brand="Grow Freely" right>
          <NavItem> About Us </NavItem>
          <NavItem> Consumers </NavItem>
          <NavItem> Business Owners </NavItem>
          <NavItem> Financial Institutions </NavItem>
        </Navbar>
        <Switch>
          <Route
            path="/"
            render={routerProps => {
              return <LandingContainer {...routerProps} />;
            }}
          />
          <Route
            path="/consumer"
            render={routerProps => {
              return <ConsumerContainer {...routerProps} />;
            }}
          />
          <Route
            path="/entrepreneur"
            render={routerProps => {
              return <BusinessOwnerContainer {...routerProps} />;
            }}
          />
          <Route
            path="/financial"
            render={routerProps => {
              return <FinancialContainer {...routerProps} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
