import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../features/post/postSlice";
import Loading from "../components/Loading";
import { BASE_URL } from "../helper/baseUrl";
import ReactMarkdown from "react-markdown";
import { TimeAgo } from "../components/TimeAgo";
import ActionButton from "../components/ActionButton";

const SinglePost = ({ match }) => {
  const { id } = match.params;

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [post, setPost] = useState({});

  useEffect(() => {
    dispatch(getPostById(id));
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL()}/api/posts/${id}`)
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
            <TimeAgo timestamp={post.createdAt} />
          </div>
          <div>{post.user._id === user._id ? <ActionButton /> : ""}</div>
          <div className="post-single-content">
            <ReactMarkdown children={post.content} />
          </div>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default SinglePost;
