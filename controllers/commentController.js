const asyncHandler = require("express-async-handler");
const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

const createComment = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const comment = new Comment({
    user: req.user._id,
    comment: req.body.comment,
    post: id,
  });

  savedComment = await comment.save();
  const relatedPost = await Post.findById(id);
  relatedPost.comments.push(comment);
  const savedRelatedPost = await relatedPost.save();
  console.log(savedRelatedPost);
  res.status(201).json(savedRelatedPost);
});

const getComments = asyncHandler(async (req, res) => {
  const comments = await Comment.find({ post: req.params.id }).populate(
    "user",
    "-password"
  );

  res.status(200).json(comments);
});

module.exports = {
  createComment,
  getComments,
};
