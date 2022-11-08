import { toast } from "react-toastify";
import { useDeletePostMutation, useLikePostMutation } from "./memoriesApi";

export const handleLikePost = async (id: string, likePost: Function) => {
  try {
    await likePost(id);
  } catch (e) {
    toast.error("Something went wrong :(");
  }
};

export const handleDeletePost = async (id: string, deletePost: Function) => {
  try { 
    await deletePost(id);
    toast.success("Post deleted succesfully");
  } catch (e) {
    toast.success("Something went wrong :(");
  }
};
