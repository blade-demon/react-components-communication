import React from "react";
import PropTypes from "prop-types";
import TopicItem from "../TopicItem/TopicItem";
import "./TopicList.css";

function TopicList(props, context) {
  return (
    <div className='TopicList'>
      {context.topicArray[context.tabInterval].map((item, index) => (
        <TopicItem item={item} key={index} index={index} />
      ))}
    </div>
  );
}

// 函数式组件写法
TopicList.contextTypes = {
  topicArray: PropTypes.array,
  tabInterval: PropTypes.number
};

export default TopicList;
