import { toast } from "react-toastify";
import { setActAddPost } from "../slices/postsSlice";
import { useDeletePostMutation, useLikePostMutation } from "./memoriesApi";

export const fetchLikePost = async (id: string, likePost: Function) => {
  try {
    await likePost(id);
  } catch (e) {
    toast.error("Something went wrong :(");
    throw Error
  }
};

export const fetchDeletePost = async (id: string, deletePost: Function) => {
  try { 
    await deletePost(id);
    toast.success("Post deleted succesfully");
  } catch (e) {
    toast.success("Something went wrong :(");
  }
};
