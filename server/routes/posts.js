import express from "express";
import {
  getPosts,
  createPost,
  likePost,
  updatePost,
  deletePost,
  getUserPosts,
  commentPut,
  getComments,
} from "../controllers/postsController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:username", auth, getUserPosts);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

// COMMENTS ----------------------------------

router.put("/comments", auth, commentPut);
router.get("/comments/:postId", auth, getComments);

export default router;
