import React, { Component } from "react";
import TopicItem from "../TopicItem/TopicItem";
import { EE } from "../../";
import "./TopicList.css";

class TopicList extends Component {
  state = {
    currentTopic: 0
  };

  componentDidMount() {
    // 监听周期变化
    EE.on("change-interval", () => {
      this.setState({
        currentTopic: 0
      });
    });

    EE.emit("select-topic", {
      index: 0,
      topicName: this.props.currentTopics[0].title
    });
  }

  // 处理topic选中状态
  handleSelectTopic = currentTopic => {
    if (currentTopic !== this.state.currentTopic) {
      this.setState({ currentTopic });
    }
  };

  render() {
    const { currentTopics, setTopicName } = this.props;
    return (
      <div className='TopicList'>
        {currentTopics.map((item, index) => (
          <TopicItem
            active={index === this.state.currentTopic ? true : false}
            item={item}
            key={index}
            index={index}
            handleSelectTopic={() => this.handleSelectTopic(index)}
            setTopicName={setTopicName}
          />
        ))}
      </div>
    );
  }
}

export default TopicList;
