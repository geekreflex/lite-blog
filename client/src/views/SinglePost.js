import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../features/post/postSlice";
import Loading from "../components/Loading";
import { BASE_URL } from "../helper/baseUrl";
import ReactMarkdown from "react-markdown";
import { TimeAgo } from "../components/TimeAgo";
import ActionButton from "../components/ActionButton";
import Comment from "../components/Comment";
import DeleteModal from "../components/DeleteModal";

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
    document.title = "Loading";
  } else {
    document.title = post.title;

    content = (
      <div className="post-single-wrap">
        <DeleteModal postId={post._id} />
        <div className="post-single">
          <h1>{post.title}</h1>

          <div className="post-single-info">
            <a href="#">{post.user.name}</a>
            <TimeAgo timestamp={post.createdAt} />
          </div>
          <div className="post-action-btn">
            {post.user._id === user._id ? (
              <ActionButton postId={post._id} />
            ) : (
              ""
            )}
          </div>
          <div className="post-single-content">
            <ReactMarkdown children={post.content} />
          </div>
        </div>
        <Comment postId={post._id} />
      </div>
    );
  }

  return <div>{content}</div>;
};

export default SinglePost;
