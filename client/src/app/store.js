import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import postsReducer from "../features/posts/postsSlice";
import modalReducer from "../features/modal/modalSlice";
import postReducer from "../features/post/postSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    modal: modalReducer,
    post: postReducer,
  },
});
