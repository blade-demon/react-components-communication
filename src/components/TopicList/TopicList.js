import React from "react";
import { TopicContext } from "../topic-context";
import TopicItem from "../TopicItem/TopicItem";
import "./TopicList.css";

function TopicList() {
  return (
    <TopicContext.Consumer>
      {({ topicList }) => (
        <div className="TopicList">
          {topicList.map((item, index) => (
            <TopicItem item={item} key={index} index={index} />
          ))}
        </div>
      )}
    </TopicContext.Consumer>
  );
}

export default TopicList;
