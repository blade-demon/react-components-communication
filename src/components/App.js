import React from "react";
import TabWrapper from "./TabWrapper/TabWrapper";
import Footer from "./Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TabWrapper />
        <Footer />
      </div>
    );
  }
}

export default App;
