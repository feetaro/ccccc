import React from "react";

import { connect } from "react-redux";

function App({ count, posts, increase, decrease }) {
  console.log(posts);

  return (
    <div className="App">
      <p>Count: {count}</p>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>

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

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: "INCREASE_COUNT" }),
    decrease: () => dispatch({ type: "DECREASE_COUNT" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
