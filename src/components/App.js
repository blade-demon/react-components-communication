import React from "react";
import TabWrapper from "./TabWrapper/TabWrapper";
import Footer from "./Footer/Footer";

// 新建EventEmitter
import EventEmitter from "eventemitter3";
class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <TabWrapper />
        <Footer />
      </div>
    );
  }
}
export const EE = new EventEmitter();
export default App;
