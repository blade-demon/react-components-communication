import React, { Component } from "react";
import { TopicContext } from "../topic-context";
import "./TopicItem.css";

class TopicItem extends Component {
  render() {
    const { title, data } = this.props.item;
    const { index } = this.props;
    return (
      <TopicContext.Consumer>
        {({ topicIndex, setTopic }) => (
          <div
            className={"TopicItem " + (index === topicIndex ? "active" : "")}
            onClick={() => {
              return index === topicIndex ? null : setTopic(index, title);
            }}
          >
            <p className="TopicItem__title">{title}</p>
            <p className="TopicItem__data">{data}</p>
          </div>
        )}
      </TopicContext.Consumer>
    );
  }
}

export default TopicItem;
