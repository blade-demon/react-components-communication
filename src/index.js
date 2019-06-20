import React, { Component } from "react";
import ReactDOM from "react-dom";
import TabWrapper from "./components/TabWrapper/TabWrapper";
import Footer from "./components/Footer/Footer";
import {
  TopicContext,
  topicArray,
  defaultIntervalIndex
} from "./components/topic-context";
import "./styles.css";

class App extends Component {
  state = {
    topicList: topicArray[defaultIntervalIndex],
    intervalTabIndex: defaultIntervalIndex,
    topicName: topicArray[defaultIntervalIndex][0].title,
    topicIndex: 0
  };

  setIntervalTab = intervalTabIndex => {
    this.setState({
      topicList: topicArray[intervalTabIndex],
      intervalTabIndex,
      topicIndex: 0,
      topicName: topicArray[intervalTabIndex][0].title
    });
  };

  setTopic = (topicIndex, topicName) => {
    this.setState({
      topicIndex,
      topicName
    });
  };

  render() {
    return (
      <TopicContext.Provider
        value={{
          topicList: this.state.topicList,
          intervalTabIndex: this.state.intervalTabIndex,
          topicIndex: this.state.topicIndex,
          topicName: this.state.topicName,
          setIntervalTab: this.setIntervalTab,
          setTopic: this.setTopic
        }}>
        <div className='App'>
          <TabWrapper />
          <Footer />
        </div>
      </TopicContext.Provider>
    );
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
