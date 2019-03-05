import React from "react";
import getPost from "../api/posts";
import PostLoader from "./Loader";

export default class PostList extends React.Component {
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
      <ul style={{ padding: 0 }}>
        {posts.map(post => (
          <li key={post.id} style={{ listStyle: "none", margin: "1rem 0" }}>
            <div className="card" style={{ padding: "1rem" }}>
              <h4>
                <em>{post.title}</em>
              </h4>
              <p>{post.body}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
