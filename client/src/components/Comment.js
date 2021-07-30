import React, { useEffect, useState } from "react";
import { BASE_URL } from "../helper/baseUrl";
import token from "../helper/authToken";
import axios from "axios";

import CommentExcerpt from "./CommentExcerpt";

const Comment = ({ postId }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(null);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = () => {
    fetch(`${BASE_URL()}/api/comments/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  };

  const handleSubmitComment = async (event) => {
    event.preventDefault();

    const payload = {
      comment,
    };

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.post(`${BASE_URL()}/api/comments/${postId}`, payload, config);

      setComment("");
      getComments();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="comment-main">
      <div className="comment-hd">
        <h1>Add Comment</h1>
        <span>({comments?.length || 0})</span>
      </div>

      <div className="comment-wrap">
        <form onSubmit={handleSubmitComment}>
          <div>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add comment"
              required
            />
          </div>
          <div>
            <button className="btn">Submit</button>
          </div>
        </form>

        <div className="comment-list">
          {comments ? (
            comments.map((comment) => (
              <CommentExcerpt key={comment._id} comment={comment} />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
