import React from "react";
import { TopicContext } from "../topic-context";
import "./TrendCurve.css";

function TrendCurve() {
  return (
    <TopicContext.Consumer>
      {({ topicName }) => (
        <div className="TrendCurve">
          <strong>{topicName}</strong>
          VS <strong>沪深300指数</strong>
        </div>
      )}
    </TopicContext.Consumer>
  );
}

export default TrendCurve;
