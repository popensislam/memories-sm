import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creatorId: String,
  creatorUsername: String,
  creatorImg: String,
  tags: [String],
  selectedFile: String,
  comments: [{id: String, writer: String, writerImg: String, text: String }],
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
