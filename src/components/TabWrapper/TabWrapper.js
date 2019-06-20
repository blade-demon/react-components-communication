import React, { Component } from "react";
import TopicContainer from "../TopicContainer/TopicContainer";

class TabWrapper extends Component {
  constructor(props) {
    super(props);
    const topicArray = [
      [
        {
          title: "科创",
          data: "+4.35%"
        },
        {
          title: "非银金融",
          data: "+4.25%"
        },
        { title: "白酒消费", data: "+3.35%" },
        { title: "5G", data: "+1.35%" }
      ],
      [
        {
          title: "科创",
          data: "+4.35%"
        },
        {
          title: "非银金融",
          data: "+14.25%"
        },
        { title: "白酒消费", data: "+3.35%" },
        { title: "5G", data: "+10.35%" }
      ],
      [
        {
          title: "科创",
          data: "+4.35%"
        },
        {
          title: "非银金融",
          data: "+4.25%"
        },
        { title: "白酒消费", data: "+9.35%" },
        { title: "5G", data: "+1.35%" }
      ],
      [
        {
          title: "科创",
          data: "+24.35%"
        },
        {
          title: "非银金融",
          data: "+14.25%"
        },
        { title: "白酒消费", data: "+3.15%" },
        { title: "5G", data: "+3.35%" }
      ],
      [
        {
          title: "科创",
          data: "+3.35%"
        },
        {
          title: "非银金融",
          data: "+4.25%"
        },
        { title: "白酒消费", data: "+6.35%" },
        { title: "5G", data: "+1.35%" }
      ]
    ];
    this.state = {
      topicArray,
      tabIndex: 3,
      list: topicArray[3],
      intervalArray: [
        { key: "yesterday", data: "昨日" },
        { key: "1_week", data: "近一周" },
        { key: "1_month", data: "近一月" },
        { key: "3_month", data: "近三月" },
        { key: "1_year", data: "近一年" }
      ]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tabIndex) {
    if (tabIndex - this.state.tabIndex) {
      let list = [];
      switch (tabIndex) {
        case 0:
          list = this.state.topicArray[0];
          break;
        case 1:
          list = this.state.topicArray[1];
          break;
        case 2:
          list = this.state.topicArray[2];
          break;
        case 4:
          list = this.state.topicArray[4];
          break;
        default:
          list = this.state.topicArray[3];
          break;
      }

      this.setState({ tabIndex, list });
    }
  }

  render() {
    const config = {
      list: this.state.list,
      tabIndex: this.state.tabIndex,
      intervalArray: this.state.intervalArray,
      handleClick: this.handleClick
    };
    return <TopicContainer {...config} />;
  }
}

export default TabWrapper;
