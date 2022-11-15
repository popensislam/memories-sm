import {
  Divider,
  Paper,
  Typography,
  Grid,
  Avatar,
  TextField,
  Box,
  TextareaAutosize,
} from "@mui/material";
import { useStyles } from "./style";
import FileBase64 from "react-file-base64";

// icons
import photoap from "../../assets/icons/photoap.svg";
import musicap from "../../assets/icons/musicap.svg";
import videoap from "../../assets/icons/videoap.svg";
import { FC, FormEventHandler, useRef, useState } from "react";

interface AccountPostsPaperProps {
  addPostData: {
    value: string;
    message: string;
    file: string;
  };
  handleSubmitForm: FormEventHandler<HTMLFormElement>;
  setAddPostData: Function;
}

const AccountPostsPaper: FC<AccountPostsPaperProps> = ({ handleSubmitForm, addPostData, setAddPostData }) => {
  const classes = useStyles();
  const [showMore, setShowMore] = useState<boolean>(false);

  const onOpenBase = () => {
    const input = document.getElementsByTagName("input")[1];
    input.click();
  };
  const handleSetShow = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Paper sx={{ width: "100%", "& input[type='file']": { display: "none" } }}>
        <Typography align="center" className={classes.profileTItle} sx={{ padding: "10px 0" }}>
          News
        </Typography>
        <Grid
          className={classes.flexRow}
          sx={{ padding: "0 16px", justifyContent: "space-between" }}
        >
          <Avatar />
          <form className={classes.postAccPaper} onSubmit={handleSubmitForm}>
            <TextField
              value={addPostData.value}
              onChange={(e) => setAddPostData({ ...addPostData, value: e.target.value })}
              placeholder="What's news ?"
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-notchedOutline": {
                  outline: "none",
                  border: "none",
                },
              }}
              required
            />
          </form>
          <div className={classes.flexRow}>
            <Box className={classes.postAddIcon} onClick={onOpenBase}>
              <img src={photoap} width="24px" height="24px" alt="photo ap icon" />
            </Box>
            <Box className={classes.postAddIcon} onClick={handleSetShow}>
              <img src={videoap} width="24px" height="24px" alt="photo ap icon" />
            </Box>
            <Box className={classes.postAddIcon}>
              <img src={musicap} width="24px" height="24px" alt="photo ap icon" />
            </Box>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem sx={{ m: "10px" }} />
        </Grid>
        <Divider />
        {showMore && (
          <TextareaAutosize
            value={addPostData.message}
            onChange={(e) => setAddPostData({ ...addPostData, message: e.target.value })}
            className={classes.textArea}
            aria-label="minimum height"
            minRows={3}
            placeholder="Write body"
          />
        )}
        {addPostData.file && showMore && (
          <img src={addPostData.file} alt="add img" className={classes.uploadImg} />
        )}
        <FileBase64
          className="HELLO"
          type="file"
          multiple={false}
          onDone={({ base64 }: string | any) => {
            setAddPostData({ ...addPostData, file: base64 });
          }}
        />
      </Paper>
    </>
  );
};

export default AccountPostsPaper;
