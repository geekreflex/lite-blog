import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleDeleteModal } from "../features/modal/modalSlice";

const ActionButton = ({ postId }) => {
  const dispatch = useDispatch();

  // const delModal = useSelector((state) => state.modal);

  const toggleDelModal = () => {
    dispatch(toggleDeleteModal());
  };

  return (
    <div className="action-btn-wrap">
      <div className="edit-control action-btn">
        <Link to={`/posts/${postId}/edit`} className="btn normal">
          Edit Post
        </Link>
      </div>
      <div className="del-control action-btn">
        <button on className="btn danger" onClick={toggleDelModal}>
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default ActionButton;
