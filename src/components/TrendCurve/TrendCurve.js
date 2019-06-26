import React from "react";
import PropTypes from "prop-types";
import "./TrendCurve.css";

function TrendCurve(props, context) {
  return (
    <div className='TrendCurve'>
      <strong>{context.topicName}</strong>
      VS <strong>沪深300指数</strong>
    </div>
  );
}

TrendCurve.contextTypes = {
  topicName: PropTypes.string,
  setTopicName: PropTypes.func
};

export default TrendCurve;
