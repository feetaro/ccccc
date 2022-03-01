import React from "react";

import { connect } from "react-redux";

function App({ count, posts }) {
  console.log(posts);

  return (
    <div className="App">
      <p>Count: {count}</p>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { count: state.countReducer.count, posts: state.postsReducer.posts };
};

export default connect(mapStateToProps)(App);
