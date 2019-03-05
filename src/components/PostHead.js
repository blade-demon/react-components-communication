import React from "react";
import getPost from "../api/posts";
import PostLoader from "./Loader";

export default class PostHead extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    getPost("/posts")
      .then(response => response.data)
      .then(posts => this.setState({ posts }));
  }

  render() {
    const { posts } = this.state;

    if (posts.length === 0) {
      return <PostLoader />;
    }

    return (
      <div className="container" style={{ margin: "1rem" }}>
        <div className="alert alert-success" role="alert">
          <em className="alert-heading">Total: {posts.length}</em>
          <hr />
          {posts.map(post => {
            return (
              <p
                key={post.id}
                style={{
                  wordWrap: "break-word",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                }}
              >
                <a href="#/">
                  {post.id}. {post.title}
                </a>
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}
