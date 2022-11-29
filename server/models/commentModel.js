import mongoose from "mongoose";

const CommentsScheme = mongoose.Schema({
  postId: String,
  comments: [
    {
      username: String,
      userImg: String,
      message: String,
      createdAt: {
        type: Date,
        default: new Date(),
      },
    },
  ],
});

const CommentsModel = mongoose.model("comments", CommentsScheme);

export default CommentsModel;
