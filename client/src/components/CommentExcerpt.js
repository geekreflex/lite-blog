import React from "react";
import { TimeAgo } from "./TimeAgo";

const CommentExcerpt = ({ comment }) => {
  if (comment) {
    return (
      <div className="com-exp">
        <div className="com-exp-info">
          <a href="#">{comment.user.name}</a>
          <span>
            <TimeAgo timestamp={comment.createdAt} />
          </span>
        </div>
        <div className="com-exp-content">
          <p>{comment.comment}</p>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default CommentExcerpt;
