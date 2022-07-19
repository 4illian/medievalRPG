import React from "react";
import PropTypes from "prop-types";
import Guillaume from "./Guillaume";
class Test extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>Greeting: {this.props.greeting}</div>
        <Guillaume />
      </React.Fragment>
    );
  }
}

Test.propTypes = {
  greeting: PropTypes.string,
};
export default Test;
