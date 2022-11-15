import mongoose from "mongoose";
import PostMessage from "../models/postModel.js";

export const getUserPosts = async (req, res) => {
  const { username } = req.params;
  console.log(username);
  try {
    const posts = await PostMessage.find({ creatorUsername: username });

    const sortedPosts = posts.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    res.status(200).json(sortedPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPosts = async (req, res) => {
  const { sortBy } = req.query;

  try {
    const postMessages = await PostMessage.find();

    switch (sortBy) {
      case "date": {
        const sortedPosts = postMessages.sort((a, b) => {
          return b.createdAt - a.createdAt;
        });
        return res.status(200).json(sortedPosts);
      }
      default:
        return res.status(200).json(postMessages);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ messsage: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  console.log(_id);
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");

  await PostMessage.findByIdAndRemove(_id);

  res.json({ message: "Post deleted succesfully" });
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) return res.json({ message: "Unauthenticated" });

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

  const post = await PostMessage.findById(id);

  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    post.likes.push(req.userId);
  } else {
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });
  res.json(updatedPost);
};

export const commentPost = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const { id } = req.body;

  try {
    const decodedUser = jwt.verify(token, process.env.TOKEN_KEY);
    const post = await PostMessage.findById(id);
    post.comments.push({
      id: Date.now(),
      writer: decodedUser.username,
      writerImg: decodedUser.mainImage,
    });
    const updatedPost = PostMessage.findOneAndUpdate(id, post, { new: true });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: "Something went wrond.", error });
  }
};
