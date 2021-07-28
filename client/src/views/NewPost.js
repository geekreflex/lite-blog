import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../features/posts/postsSlice";
import MyEditor from "../components/MyEditor";

const NewPost = ({ history }) => {
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
    <div>
      <div>
        <h1>Create New Post</h1>
      </div>
      <div>
        <form onSubmit={newPostSubmit}>
          <div>
            <input
              placeholder="Post Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              placeholder="Post Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <MyEditor content={content} setContent={setContent} />
          </div>
          <div>
            <button>Submit Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
