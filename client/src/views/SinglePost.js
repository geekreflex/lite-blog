import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../features/post/postSlice";
import Loading from "../components/Loading";

const SinglePost = ({ match }) => {
  const { id } = match.params;

  const dispatch = useDispatch();
  // const { post } = useSelector((state) => state.post);

  const [post, setPost] = useState({});

  useEffect(() => {
    dispatch(getPostById(id));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  let content = "";

  if (!post.user) {
    content = <Loading />;
  } else {
    content = (
      <div className="post-single-wrap">
        <div className="post-single">
          <h1>{post.title}</h1>
          <div className="post-single-info">
            <a href="#">{post.user.name}</a>
          </div>
          <div className="post-single-content">
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default SinglePost;
