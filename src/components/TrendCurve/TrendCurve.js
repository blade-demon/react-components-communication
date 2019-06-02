import React from "react";
import "./TrendCurve.css";

export default function TrendCurve(props) {
  const { topicName = "主题名称" } = props;
  return (
    <div className="TrendCurve">
      <strong>{topicName} </strong>
      VS <strong>沪深300指数</strong>
    </div>
  );
}
