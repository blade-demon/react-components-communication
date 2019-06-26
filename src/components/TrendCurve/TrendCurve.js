import React, { Component } from "react";
import { EE } from "../../";
import "./TrendCurve.css";

class TrendCurve extends Component {
  state = {
    topicName: "默认主题",
    currentIntervalIndex: 3
  };

  // 为了获得默认主题名称，在cwm生命周期函数增加监听函数。
  componentWillMount() {
    // 监听主题变化
    EE.on("select-topic", context => {
      this.setState({
        topicName: context.topicName
      });
    });

    // 监听周期变化，获得周期换后的数据
    EE.on("change-interval", context => {
      this.setState({
        currentIntervalIndex: context.currentTabIndex
      });
    });
  }

  componentWillUnmount() {
    console.log("will unmounnt");
  }

  render() {
    return (
      <div className='TrendCurve'>
        <strong>{this.state.topicName} </strong>
        VS <strong>沪深300指数</strong>
      </div>
    );
  }
}

export default TrendCurve;
