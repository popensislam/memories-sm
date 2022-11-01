import { Paper, TextField, Typography, Button } from "@mui/material";
import { ChangeEvent, useState } from "react";
import FileBase64 from "react-file-base64";
import { useAddPostMutation } from "../../store/services/memoriesApi";

import { useStyles } from "./styles";

const Form = () => {
  const classes = useStyles();
  const [postAddPost, {data}] = useAddPostMutation();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  console.log(data)

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const clear = () => {};

  const handleSubmit = (
    e: ChangeEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    postAddPost(postData);
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
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
          onChange={(e) => handleOnChange(e)}
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
