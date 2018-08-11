import React from "react";
import PropTypes from "prop-types";

class BusinessOwnerContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <BusinessOwnerSurveyContainer />
        <BusinessOwnerDashboardContainer />
      </div>
    );
  }
}

export default BusinessOwnerContainer;
