import React, { Component } from "react";
import PostList from "./components/PostList";
import PostHead from "./components/PostHead";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-4">Raw methods</h1>
            <p className="lead">
              This is a simple demo for how to handle communications between
              components.
            </p>
            <hr className="my-4" />
            <p>
              Data fetched from
              <a href="https://jsonplaceholder.typicode.com">
                JSON placeholder.
              </a>
            </p>
          </div>
          <div className="row">
            <div className="col-sm-7 col-md-8">
              <PostList />
            </div>
            <div className="col-sm-5 col-md-4">
              <PostHead />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
