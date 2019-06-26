import React, { Component } from "react";
import { render } from "react-dom";
import EventEmitter from "eventemitter3";
import TabWrapper from "./components/TabWrapper/TabWrapper";
import Footer from "./components/Footer/Footer";
import "./styles.css";

// 全局事件对象
export const EE = new EventEmitter();

class App extends Component {
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
render(<App />, rootElement);
