import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import TabWrapper from "./components/TabWrapper/TabWrapper";
import Footer from "./components/Footer/Footer";
import { topicArray, intervalArray } from "./components/data";
import "./styles.css";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      topicName: topicArray[3][0].title,
      topicArray,
      intervalArray,
      topicIndex: 0,
      tabInterval: 3
    };
  }

  // 父组件声明自己支持 context
  static childContextTypes = {
    topicName: PropTypes.string,
    topicIndex: PropTypes.number,
    topicArray: PropTypes.array,
    intervalArray: PropTypes.array,
    tabInterval: PropTypes.number,
    setTopic: PropTypes.func,
    setTabInterval: PropTypes.func
  };

  // 父组件提供一个函数，用来返回相应的 context 对象
  getChildContext() {
    return {
      topicName: this.state.topicName,
      topicIndex: this.state.topicIndex,
      tabInterval: this.state.tabInterval,
      topicArray: this.state.topicArray,
      intervalArray: this.state.intervalArray,
      setTopic: this.setTopic.bind(this),
      setTabInterval: this.setTabInterval.bind(this)
    };
  }

  setTopic(topicIndex, topicName) {
    this.setState({
      topicIndex,
      topicName
    });
  }

  setTabInterval(tabInterval) {
    this.setState({
      tabInterval,
      topicIndex: 0,
      topicName: topicArray[tabInterval][0].title
    });
  }

  render() {
    return (
      <div className='App'>
        <TabWrapper />
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
