import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../features/posts/postsSlice";

const NewPost = ({ history }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const newPostSubmit = (event) => {
    event.preventDefault();
    const payload = {
      title,
      content,
    };

    dispatch(createPost(payload));
    history.push("/");
  };

  return (
    <div>
      <div>
        <h1>Create New Post</h1>
      </div>
      <div>
        <form onSubmit={newPostSubmit}>
          <input
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Post Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button>Submit Post</button>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
