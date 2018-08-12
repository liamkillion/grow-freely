import React from "react";
import PropTypes from "prop-types";
import BusinessOwnerSurveyContainer from "./BusinessOwnerSurveyContainer";
import BusinessOwnerDashboardContainer from "./BusinessOwnerDashboardContainer";

class BusinessOwnerContainer extends React.Component {
  render() {
    state = {
      componentDisplay: ""
    };
    return (
      <div className="container">
        if (this.state.componentDisplay = "dashboard")
        {<BusinessOwnerSurveyContainer />} else
        {<BusinessOwnerDashboardContainer />}
      </div>
    );
  }
}

export default BusinessOwnerContainer;
