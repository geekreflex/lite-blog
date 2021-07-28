import React from "react";

const ActionButton = () => {
  return (
    <div className="action-btn-wrap">
      <div className="edit-control action-btn">
        <button className="btn normal">Edit Post</button>
      </div>
      <div className="del-control action-btn">
        <button className="btn danger">Delete Post</button>
      </div>
    </div>
  );
};

export default ActionButton;
