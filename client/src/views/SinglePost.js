import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../features/post/postSlice";

const SinglePost = ({ match }) => {
  const { id } = match.params;

  const dispatch = useDispatch();
  const { post, status } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostById(id));
  }, []);

  let content = "";

  if (!post.user) {
    content = <div>Loading</div>;
  } else {
    content = (
      <div className="post-single-wrap">
        <section className="sec-post-l">
          <div className="post-single">
            <h1>{post.title}</h1>
            <div className="post-single-info">
              <a href="#">{post.user.name}</a>
            </div>
            <div className="post-single-content">
              <p>{post.content}</p>
            </div>
          </div>
        </section>
        <section></section>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default SinglePost;
