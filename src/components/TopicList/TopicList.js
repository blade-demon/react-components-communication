import React, { Component } from "react";
import TopicItem from "../TopicItem/TopicItem";
import "./TopicList.css";

class TopicList extends Component {
  constructor(props) {
    super(props);
    // 设置初始值
    // this.props.setTopicName(props.list[0].title);
    this.state = {
      current: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.tabIndex !== nextProps.tabIndex) {
      this.setState({
        current: 0
      });
    }
  }

  handleSelectTopic = index => {
    if (index !== this.state.current) {
      this.setState({
        current: index
      });
    }
  };

  render() {
    const { list } = this.props;

    return (
      <div className='TopicList'>
        {list.map((item, index) => (
          <TopicItem
            active={index === this.state.current ? true : false}
            item={item}
            key={index}
            index={index}
            handleSelectTopic={() => this.handleSelectTopic(index)}
          />
        ))}
      </div>
    );
  }
}

export default TopicList;
