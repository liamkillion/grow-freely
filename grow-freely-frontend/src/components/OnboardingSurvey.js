import React from "react";
import PropTypes from "prop-types";
import { Row, Input, Button } from "react-materialize";

class OnboardingSurvey extends React.Component {
  render() {
    return (
      <Row>
        <Input placeholder="James" s={6} label="First Name" />
        <Input placeholder="Bond" s={6} label="Last Name" />
        <Input type="password" label="password" s={12} />
        <Input type="email" placeholder="jbond@mi6.com" label="Email" s={12} />
        <Input
          s={12}
          type="select"
          label="Which best describes you?"
          defaultValue="2"
        >
          <option value="1">Need more funding to start a business</option>
          <option value="2">Have a business & want to expand</option>
          <option value="3">Have an idea but no funding</option>
        </Input>
        <Button onClick={(this.props.componentDisplay = "dashboard")}>
          Submit
        </Button>
      </Row>
    );
  }
}

export default OnboardingSurvey;
