import React from "react";
import { useSelector } from "react-redux";
import { IoChatbubbleOutline } from "react-icons/io5";
import { TimeAgo } from "./TimeAgo";
import { Link } from "react-router-dom";

const Post = ({ post, history }) => {
  const showPostSingle = () => {
    history.push(`/posts/${post._id}`);
  };

  const userId = useSelector((state) => state.user.user._id);

  return (
    <div
      className={
        post.user._id === userId ? "post-card user-post-marked" : "post-card"
      }
      onClick={showPostSingle}
    >
      <div key={post._id}>
        <div className="pc-details">
          <div className="pc-author">
            <Link href="/">{post.user.name}</Link>
            <TimeAgo timestamp={post.createdAt} />
          </div>
          <div className="pc-info">
            <Link className="pc-info-title" href={`/posts/${post._id}`}>
              {post.title}
            </Link>
            <p>{post.description}</p>
          </div>
        </div>
        <div className="pc-actions">
          <div className="pc-actions-l">
            <div className="pc-a-ic">
              <IoChatbubbleOutline />
              <span>{post.comments?.length}</span>
            </div>
          </div>
          <div className="pc-actions-r"></div>
        </div>
      </div>
    </div>
  );
};

export default Post;
