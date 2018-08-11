import React from "react";
import PropTypes from "prop-types";
import { Navbar } from "react-materialize";

class Navbar extends React.Component {
  render() {
    return (
      <Navbar brand="Grow Freely" right>
        <NavItem> About Us </NavItem>
        <NavItem> Consumers </NavItem>
        <NavItem> Business Owners </NavItem>
        <NavItem> Financial Institutions </NavItem>
      </Navbar>
    );
  }
}

export default Navbar;
