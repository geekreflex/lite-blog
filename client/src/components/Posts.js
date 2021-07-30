import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import Post from "./Post";

const Posts = ({ posts, history }) => {
  const { status } = useSelector((state) => state.posts);

  if (status === "loading") {
    return <Loading />;
  }
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
