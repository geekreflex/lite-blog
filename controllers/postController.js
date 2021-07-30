const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().populate("user", "-password");

  res.json(posts);
});

const createPost = asyncHandler(async (req, res) => {
  const { title, description, content } = req.body;

  const post = new Post({
    title,
    description,
    content,
    user: req.user._id,
  });

  const createdPost = await post.save();
  return res.status(201).json(createdPost);
});

const getUserPost = asyncHandler(async (req, res) => {
  const { _id } = req.user;

  const post = await Post.find({ user: _id }).populate("comments");

  if (post) {
    return res.status(200).json(post);
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

const getPostById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const post = await Post.findById(id).populate("user", "-password");

  if (post) {
    return res.json(post);
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

const updatePost = asyncHandler(async (req, res) => {
  const { title, description, content } = req.body;

  const post = await Post.findById(req.params.id);

  if (post) {
    post.title = title;
    post.description = description;
    post.content = content;
    post.user = req.user._id;

    const updatedPost = await post.save();
    res.json(updatedPost);
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const post = await Post.findById(id);

  if (post) {
    await post.remove();
    return res.json({ message: "Post removed" });
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

module.exports = {
  createPost,
  getPosts,
  getUserPost,
  getPostById,
  updatePost,
  deletePost,
};
