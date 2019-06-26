import React from "react";
import PropTypes from "prop-types";
import TopicList from "../TopicList/TopicList";
import { TabItem } from "../TabItem/TabItem";
import "./TopicContainer.css";

class TopicContainer extends React.Component {
  static contextTypes = {
    intervalArray: PropTypes.array,
    setTabInterval: PropTypes.func
  };

  render() {
    return (
      <div>
        <h2 className='TopicContainer__Head'>爱理财主题精选系列</h2>
        <div className='TopicContainer__Body'>
          <TopicList />
        </div>
        <div className='TopicContainer__Footer'>
          {this.context.intervalArray.map((interval, index) => (
            <TabItem interval={interval} key={index} index={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default TopicContainer;
