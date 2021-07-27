import React from "react";
import Post from "./Post";

const Posts = ({ posts, history }) => {
  return (
    <div className="post-list">
      <div>
        {posts.map((post) => (
          <Post key={post._id} post={post} history={history} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
