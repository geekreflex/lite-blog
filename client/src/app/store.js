import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import postsReducer from "../features/posts/postsSlice";
import postReducer from "../features/post/postSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    post: postReducer,
  },
});
