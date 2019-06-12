import React, { Component } from "react";
// import { TopicContext } from "../../topic-context";

import "./TrendCurve.css";

export default class TrendCurve extends Component {
  render() {
    return (
      <div className='TrendCurve'>
        <strong>{this.context} </strong>
        VS <strong>沪深300指数</strong>
      </div>
    );
  }
}
