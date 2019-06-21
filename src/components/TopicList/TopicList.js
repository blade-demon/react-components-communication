import React from "react";
import { Consumer } from "../topic-context";
import TopicItem from "../TopicItem/TopicItem";
import "./TopicList.css";

function TopicList() {
  return (
    <Consumer>
      {({ topicList }) => (
        <div className='TopicList'>
          {topicList.map((item, index) => (
            <TopicItem item={item} key={index} index={index} />
          ))}
        </div>
      )}
    </Consumer>
  );
}

export default TopicList;
