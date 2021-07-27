import React from "react";
import { useSelector } from "react-redux";
import { IoChatbubbleOutline, IoHeartOutline } from "react-icons/io5";

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
            <a href="/">{post.user.name}</a>
          </div>
          <div className="pc-info">
            <a className="pc-info-title" href={`/posts/${post._id}`}>
              {post.title}
            </a>
            <p>{post.content}</p>
          </div>
        </div>
        <div className="pc-actions">
          <div className="pc-actions-l">
            <div className="pc-a-ic">
              <IoHeartOutline />
              <span>288</span>
            </div>
            <div className="pc-a-ic">
              <IoChatbubbleOutline />
              <span>311</span>
            </div>
          </div>
          <div className="pc-actions-r"></div>
        </div>
      </div>
    </div>
  );
};

export default Post;
