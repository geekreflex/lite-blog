const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
