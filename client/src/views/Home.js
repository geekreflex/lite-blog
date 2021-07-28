import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Posts from "../components/Posts";

const Home = ({ history }) => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="main-flex">
      <Posts posts={posts} history={history} />
    </div>
  );
};

export default Home;
