import React, { Component } from "react";
import TopicContainer from "../TopicContainer/TopicContainer";

class TabWrapper extends Component {
  constructor(props) {
    super(props);
    const topicArray = [
      [
        {
          title: "科创",
          data: "+4.35%"
        },
        {
          title: "非银金融",
          data: "+4.25%"
        },
        { title: "白酒消费", data: "+3.35%" },
        { title: "5G", data: "+1.35%" },
        { title: "超导", data: "+2.35%" }
      ],
      [
        {
          title: "科创",
          data: "+4.35%"
        },
        {
          title: "非银金融",
          data: "+14.25%"
        },
        { title: "白酒消费", data: "+3.35%" },
        { title: "5G", data: "+10.35%" },
        { title: "超导", data: "+2.35%" }
      ],
      [
        {
          title: "科创",
          data: "+4.35%"
        },
        {
          title: "非银金融",
          data: "+4.25%"
        },
        { title: "白酒消费", data: "+9.35%" },
        { title: "5G", data: "+1.35%" },
        { title: "超导", data: "+2.35%" }
      ],
      [
        {
          title: "科创",
          data: "+24.35%"
        },
        {
          title: "非银金融",
          data: "+14.25%"
        },
        { title: "白酒消费", data: "+3.15%" },
        { title: "5G", data: "+3.35%" },
        { title: "超导", data: "+7.35%" }
      ],
      [
        {
          title: "科创",
          data: "+3.35%"
        },
        {
          title: "非银金融",
          data: "+4.25%"
        },
        { title: "白酒消费", data: "+6.35%" },
        { title: "5G", data: "+1.35%" },
        { title: "超导", data: "+5.35%" }
      ]
    ];
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

      // this.props.setTopicName(
      //   list.sort(
      //     (b, a) =>
      //       +a.data.slice(1).replace("%", "") -
      //       +b.data.slice(1).replace("%", "")
      //   )[0].title
      // );

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

export default TabWrapper;
