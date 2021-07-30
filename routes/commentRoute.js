const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  createComment,
  getComments,
} = require("../controllers/commentController");
const router = express.Router();

router.post("/:id", protect, createComment);
router.get("/:id", getComments);

module.exports = router;
