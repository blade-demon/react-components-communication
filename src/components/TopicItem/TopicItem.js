import React, { Component } from "react";
import { EE } from "../..";
import "./TopicItem.css";

class TopicItem extends Component {
  state = {
    active: false
  };

  // 选择主题
  onSelectTopic = (index, topicName) => {
    this.props.handleSelectTopic(index);
    EE.emit("select-topic", {
      index,
      topicName
    });
  };

  render() {
    const { title, data } = this.props.item;
    const { active, index } = this.props;

    return (
      <div
        className={"TopicItem " + (active ? "active" : "")}
        onClick={() => this.onSelectTopic(index, title)}>
        <p className='TopicItem__title'>{title}</p>
        <p className='TopicItem__data'>{data}</p>
      </div>
    );
  }
}

export default TopicItem;
