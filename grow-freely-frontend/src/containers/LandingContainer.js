import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Button } from "react-materialize";

class LandingContainer extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col s={4} />
          <Col s={4}>
            <h1>Are you a...</h1>
          </Col>
          <Col s={4} />
        </Row>
        <Row />
        <Row>
          <Col s={1} />
          <Col s={3}>
            <Button
              href="/consumer"
              onClick={() => {
                this.props.history.push("/consumer");
              }}
            >
              Consumer?
            </Button>
          </Col>
          <Col s={1} />
          <Col s={3}>
            <Button
              href="/entrepreneur/survey"
              onClick={() => {
                this.props.history.push("/entrepreneur/survey");
              }}
            >
              Business Owner?
            </Button>
          </Col>
          <Col s={1} />
          <Col s={3}>
            <Button
              href="/financial"
              onClick={() => {
                this.props.history.push("/financial");
              }}
            >
              Financial Institution?
            </Button>
          </Col>
          <Col s={1} />
        </Row>
        <Row />
      </div>
    );
  }
}

export default LandingContainer;
