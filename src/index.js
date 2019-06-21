import React, { Component } from "react";
import ReactDOM from "react-dom";
import TabWrapper from "./components/TabWrapper/TabWrapper";
import Footer from "./components/Footer/Footer";
import { TopicProvider } from "./components/topic-context";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TopicProvider value={this.state}>
          <TabWrapper />
          <Footer />
        </TopicProvider>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
