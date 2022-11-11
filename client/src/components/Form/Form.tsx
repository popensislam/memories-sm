import { Paper, TextField, Typography, Button, Snackbar, Alert } from "@mui/material";
import { ChangeEvent, useState, useEffect } from "react";
import FileBase64 from "react-file-base64";
import { toast, ToastContainer } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useAddPostMutation, useUpdatePostMutation } from "../../store/postServices/memoriesApi";
import { clearCurrentState, setActAddPost } from "../../store/slices/postsSlice";

import "react-toastify/dist/ReactToastify.css";
import { useStyles } from "./styles";

const Form = () => {
  const classes = useStyles();
  const [postAddPost] = useAddPostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [postData, setPostData] = useState<any>({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useAppDispatch();
  const { currentId, currentPost } = useAppSelector((state) => state.posts);

  useEffect(() => {
    if (currentPost !== null) {
      setPostData(currentPost);
    }
  }, [currentPost]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const clear = () => {
    dispatch(clearCurrentState());
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (currentId) {
        await updatePost(postData);
      } else {
        await postAddPost(postData);
        dispatch(setActAddPost());
      }
      toast.success("🦄 It is done!");
      clear();
    } catch (error) {
      toast.error("Something went wrong :(");
      console.error("rejected", error);
    }
  };
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h6">
          {currentId !== null ? "Editing a memory" : "Creating a Memory"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => handleOnChange(e)}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => handleOnChange(e)}
        />{" "}
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) => handleOnChange(e)}
        />{" "}
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })}
        />{" "}
        <div className={classes.fileInput}>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }: string | any) => {
              setPostData({ ...postData, selectedFile: base64 });
            }}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="error"
          size="large"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
