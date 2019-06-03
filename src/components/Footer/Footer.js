import React, { Component } from "react";
import TrendCurve from "../TrendCurve/TrendCurve";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicName: ""
    };
  }

  render() {
    const { topicName } = this.props;
    return (
      <div>
        <TrendCurve topicName={topicName} />
      </div>
    );
  }
}

export default Footer;
