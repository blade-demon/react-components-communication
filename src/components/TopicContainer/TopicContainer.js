import React, { Component } from "react";
import TopicList from "../TopicList/TopicList";
import TabItem from "../TabItem/TabItem";
import { EE } from "../../";
import "./TopicContainer.css";

class TopicContainer extends Component {
  // 切换周期Tab
  handleClickTab(currentTabIndex) {
    EE.emit("change-interval", { currentTabIndex });
  }

  render() {
    const { intervalArray, currentTopics } = this.props;

    return (
      <div>
        <h2 className='TopicContainer__Head'>爱理财主题精选系列</h2>
        <div className='TopicContainer__Body'>
          <TopicList currentTopics={currentTopics} />
        </div>
        <div className='TopicContainer__Footer'>
          {intervalArray.map((interval, index) => (
            <TabItem
              interval={interval}
              key={index}
              index={index}
              handleClickTab={this.handleClickTab}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TopicContainer;
