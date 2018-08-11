import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import Navbar from "./components/NavBar";
import {
  LandingContainer,
  ConsumerContainer,
  BusinessOwnerContainer,
  FinancialContainer
} from "./containers";

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <Switch>
        <NavBar />
        <Route
          path="/landing"
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
    );
  }
}

export default App;
