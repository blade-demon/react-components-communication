import React, { Component } from "react";
import { connect } from "react-redux";
import { setTopicName } from "../../actions/filters";
import "./TopicItem.css";

class TopicItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  onSelectTopic = (index, topicName) => {
    this.props.handleSelectTopic(index);
    this.props.setTopicName(topicName);
  };

  render() {
    const { title, data } = this.props.item;
    const { active, index } = this.props;

    return (
      <div
        className={"TopicItem " + (active ? "active" : "")}
        onClick={() => this.onSelectTopic(index, title)}
      >
        <p className="TopicItem__title">{title}</p>
        <p className="TopicItem__data">{data}</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTopicName: name => dispatch(setTopicName(name))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TopicItem);
