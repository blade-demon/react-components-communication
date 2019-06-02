import React from "react";
import { connect } from "react-redux";
import { store } from "../../index";
import TrendCurve from "../TrendCurve/TrendCurve";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicName: store.getState().filters.topicName
    };
  }

  render() {
    const { topicName } = this.props;
    console.log(topicName);
    return (
      <div>
        <TrendCurve topicName={topicName} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    topicName: state.filters.topicName
  };
};

export default connect(mapStateToProps)(Footer);
