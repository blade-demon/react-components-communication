import React from "react";
import PropTypes from "prop-types";
import "./TopicItem.css";

function TopicItem(props, context) {
  const { title, data } = props.item;
  const { index } = props;

  return (
    <div
      className={"TopicItem " + (index === context.topicIndex ? "active" : "")}
      onClick={() => context.setTopic(index, title)}>
      <p className='TopicItem__title'>{title}</p>
      <p className='TopicItem__data'>{data}</p>
    </div>
  );
}

// 声明context类型
TopicItem.contextTypes = {
  topicIndex: PropTypes.number,
  topicName: PropTypes.string,
  setTopic: PropTypes.func
};

export default TopicItem;
