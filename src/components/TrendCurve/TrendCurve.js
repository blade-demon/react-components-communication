import React from "react";
import { Consumer } from "../topic-context";
import "./TrendCurve.css";

function TrendCurve() {
  return (
    <Consumer>
      {({ topicName }) => (
        <div className='TrendCurve'>
          <strong>{topicName}</strong>
          VS <strong>沪深300指数</strong>
        </div>
      )}
    </Consumer>
  );
}

export default TrendCurve;
