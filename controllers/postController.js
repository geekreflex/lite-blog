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

  const post = await Post.find({ user: _id });

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

module.exports = { createPost, getPosts, getUserPost, getPostById, deletePost };
