import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../../index";
import TopicContainer from "../TopicContainer/TopicContainer";
import { setTopicName } from "../../actions/filters";

class TabWrapper extends Component {
  constructor(props) {
    super(props);
    const topicArray = store.getState().topics;
    this.state = {
      topicArray,
      current: 3,
      list: topicArray[3]
        .sort(
          (b, a) =>
            +a.data.slice(1).replace("%", "") -
            +b.data.slice(1).replace("%", "")
        )
        .filter((item, index) => index < 4)
    };
  }

  handleClick = index => {
    if (index - this.state.current) {
      let list = [];
      switch (index) {
        case 0:
          list = this.state.topicArray[0];
          break;
        case 1:
          list = this.state.topicArray[1];
          break;
        case 2:
          list = this.state.topicArray[2];
          break;
        case 4:
          list = this.state.topicArray[4];
          break;
        default:
          list = this.state.topicArray[3];
          break;
      }

      this.props.setTopicName(
        list.sort(
          (b, a) =>
            +a.data.slice(1).replace("%", "") -
            +b.data.slice(1).replace("%", "")
        )[0].title
      );

      this.setState({
        current: index,
        list: list
          .sort(
            (b, a) =>
              +a.data.slice(1).replace("%", "") -
              +b.data.slice(1).replace("%", "")
          )
          .filter((item, index) => index < 4)
      });
    }
  };

  render() {
    const props = {
      list: this.state.list,
      current: this.state.current,
      handleClick: this.handleClick
    };
    return <TopicContainer {...props} />;
  }
}

const mapDispatchToProps = dispatch => ({
  setTopicName: topicName => dispatch(setTopicName(topicName))
});

export default connect(
  null,
  mapDispatchToProps
)(TabWrapper);
