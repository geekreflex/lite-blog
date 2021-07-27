import React from "react";
import { useSelector } from "react-redux";
import Posts from "../components/Posts";

const Home = ({ history }) => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="main-flex">
      <section className="sec-l">
        <h3>Left Section</h3>
      </section>
      <section className="sec-c">
        <Posts posts={posts} history={history} />
      </section>
      <section className="sec-r">
        <h3>Right Section</h3>
      </section>
    </div>
  );
};

export default Home;
