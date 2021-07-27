import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";

import { getUserInfoFromStorage } from "./features/user/userSlice";
import { getPosts } from "./features/posts/postsSlice";

store.dispatch(getUserInfoFromStorage());
store.dispatch(getPosts());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
