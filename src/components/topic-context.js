import React, { Component } from "react";
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
      title: "非银金融",
      data: "+14.25%"
    },
    {
      title: "科创",
      data: "+4.35%"
    },
    { title: "白酒消费", data: "+3.35%" },
    { title: "5G", data: "+10.35%" }
  ],
  [
    { title: "5G", data: "+1.35%" },
    {
      title: "科创",
      data: "+4.35%"
    },
    {
      title: "非银金融",
      data: "+4.25%"
    },
    { title: "白酒消费", data: "+9.35%" }
  ],
  [
    { title: "白酒消费", data: "+3.15%" },
    {
      title: "科创",
      data: "+24.35%"
    },
    {
      title: "非银金融",
      data: "+14.25%"
    },
    { title: "5G", data: "+3.35%" }
  ],
  [
    {
      title: "科创",
      data: "+13.35%"
    },
    {
      title: "非银金融",
      data: "+4.25%"
    },
    { title: "白酒消费", data: "+6.35%" },
    { title: "5G", data: "+1.35%" }
  ]
];

const intervalArray = [
  { key: "yesterday", value: "昨日" },
  { key: "1_week", value: "近一周" },
  { key: "1_month", value: "近一月" },
  { key: "3_month", value: "近三月" },
  { key: "1_year", value: "近一年" }
];

const defaultIntervalIndex = 3;

export const { Provider, Consumer } = React.createContext();

export class TopicProvider extends Component {
  state = {
    topicList: topicArray[defaultIntervalIndex],
    intervalArray,
    intervalTabIndex: defaultIntervalIndex,
    topicName: topicArray[defaultIntervalIndex][0].title,
    topicIndex: 0,
    setIntervalTab: this.setIntervalTab.bind(this),
    setTopic: this.setTopic.bind(this)
  };

  setIntervalTab(intervalTabIndex) {
    this.setState({
      topicList: topicArray[intervalTabIndex],
      intervalTabIndex,
      topicIndex: 0,
      topicName: topicArray[intervalTabIndex][0].title
    });
  }

  setTopic(topicIndex, topicName) {
    this.setState({
      topicIndex,
      topicName
    });
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
