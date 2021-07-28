import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPostById } from "../features/post/postSlice";
import Loading from "../components/Loading";
import { BASE_URL } from "../helper/baseUrl";
import ReactMarkdown from "react-markdown";

const SinglePost = ({ match }) => {
  const { id } = match.params;

  const dispatch = useDispatch();
  // const { post } = useSelector((state) => state.post);

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
          </div>
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
