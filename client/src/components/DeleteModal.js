import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDeleteModal } from "../features/modal/modalSlice";
import { deletePost } from "../features/posts/postsSlice";

const DeleteModal = ({ postId }) => {
  const dispatch = useDispatch();

  const proceedDelete = () => {
    dispatch(deletePost(postId));
  };

  const cancelDelete = () => {
    dispatch(toggleDeleteModal());
  };

  const { value } = useSelector((state) => state.modal);

  return (
    <div
      className={value ? "delete-modal" : "delete-modal del-hidden"}
      onClick={cancelDelete}
    >
      <div className="del-wrap">
        <p>Are you sure?</p>
        <div className="del-action-btn">
          <button onClick={cancelDelete} className="btn grey">
            Cancel
          </button>
          <button onClick={proceedDelete} className="btn danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
