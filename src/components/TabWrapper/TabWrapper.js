import React, { Component } from "react";
import TopicContainer from "../TopicContainer/TopicContainer";
import { EE } from "../../";
import { topicArray, intervalArray } from "../data";

class TabWrapper extends Component {
  state = {
    topicArray,
    intervalArray,
    currentTopics: topicArray[3]
  };

  componentDidMount() {
    // 切换tab成功以后，将当前的主题编号为0的激活。
    EE.on("change-interval", context => {
      this.setState(
        {
          currentTopics: topicArray[context.currentTabIndex]
        },
        () => {
          EE.emit("select-topic", {
            index: 0,
            topicName: topicArray[context.currentTabIndex][0].title
          });
        }
      );
    });
  }

  render() {
    const tabConfig = {
      intervalArray: this.state.intervalArray,
      currentTopics: this.state.currentTopics
    };
    return <TopicContainer {...tabConfig} />;
  }
}

export default TabWrapper;
