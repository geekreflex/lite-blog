const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  createPost,
  deletePost,
  getPosts,
  getUserPost,
  getPostById,
} = require("../controllers/postController");

const router = express.Router();

router.get("/", getPosts);
router.post("/", protect, createPost);
router.get("/user", protect, getUserPost);
router.get("/:id", getPostById);
router.delete("/:id", protect, deletePost);

module.exports = router;
