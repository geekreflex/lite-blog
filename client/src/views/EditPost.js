import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updatePost } from "../features/posts/postsSlice";
import MyEditor from "../components/MyEditor";
import { BASE_URL } from "../helper/baseUrl";
import Loading from "../components/Loading";

const NewPost = ({ match }) => {
  const id = match.params.id;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `Loading`;
    setLoading(true);
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL()}/api/posts/${id}`);
      console.log(data);
      setLoading(false);
      setTitle(data.title);
      setDescription(data.description);
      setContent(data.content);
      document.title = `Edit | ${data.title}`;
    } catch (error) {
      console.error(error);
    }
  };

  const newPostSubmit = (event) => {
    event.preventDefault();
    const payload = {
      data: { title, description, content },
      postId: id,
    };

    dispatch(updatePost(payload));
  };

  if (loading) {
    return <Loading />;
  }
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
          <div className="editor-control ed-ctrl-desc">
            <textarea
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
            <button className="btn">Update Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
