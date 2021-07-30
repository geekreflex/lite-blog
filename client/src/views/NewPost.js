import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../features/posts/postsSlice";
import MyEditor from "../components/MyEditor";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const newPostSubmit = (event) => {
    event.preventDefault();
    const payload = {
      title,
      description,
      content,
    };

    dispatch(createPost(payload));
  };

  return (
    <div className="new-post-wrap">
      <div>{/* <h1>Create New Post</h1> */}</div>
      <div className="form-editor">
        <form onSubmit={newPostSubmit}>
          <div className="editor-control">
            <input
              placeholder="Post Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="editor-control">
            <input
              placeholder="Post Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="editor-control">
            <MyEditor content={content} setContent={setContent} />
          </div>
          <div>
            <button className="btn">Submit Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
