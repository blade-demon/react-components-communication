import React from "react";
import TabWrapper from "./TabWrapper/TabWrapper";
import Footer from "./Footer/Footer";
import { TopicContext, topicArray } from "../topic-context";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTopic = () => {
      this.setState(state => ({
        topic: state.topic
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      topicArray: topicArray,
      toggleTopic: this.toggleTopic
    };
  }

  render() {
    return (
      <TopicContext.Provider value='主题名称'>
        <div className='App'>
          <TabWrapper />
          <Footer />
        </div>
      </TopicContext.Provider>
    );
  }
}

export default App;
