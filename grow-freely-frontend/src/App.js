import React, { Component } from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import LandingContainer from "./containers/LandingContainer";
import ConsumerContainer from "./containers/ConsumerContainer";
import BusinessOwnerSurveyContainer from "./containers/BusinessOwnerSurveyContainer";
import BusinessOwnerDashboardContainer from "./containers/BusinessOwnerDashboardContainer";
import FinancialContainer from "./containers/FinancialContainer";
import { Navbar, NavItem } from "react-materialize";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar brand="Grow Freely" left>
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
              return <BusinessOwnerDashboardContainer {...routerProps} />;
            }}
          />
          <Route
            path="/entrepreneur/survey"
            render={routerProps => {
              return <BusinessOwnerSurveyContainer {...routerProps} />;
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
