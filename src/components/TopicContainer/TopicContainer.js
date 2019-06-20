import React from "react";
import TopicList from "../TopicList/TopicList";
import { intervalArray } from "../topic-context";
import { TabItem } from "../TabItem/TabItem";
import "./TopicContainer.css";

class TopicContainer extends React.Component {
  render() {
    return (
      <div>
        <h2 className="TopicContainer__Head">爱理财主题精选系列</h2>
        <div className="TopicContainer__Body">
          <TopicList />
        </div>
        <div className="TopicContainer__Footer">
          {intervalArray.map((interval, index) => (
            <TabItem interval={interval} key={index} index={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default TopicContainer;
