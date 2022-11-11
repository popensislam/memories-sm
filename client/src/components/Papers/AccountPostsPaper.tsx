import { Divider, Paper, Typography, Grid, Avatar, TextField, Box } from "@mui/material";
import { useStyles } from "./style";

// icons
import photoap from "../../assets/icons/photoap.svg";
import musicap from "../../assets/icons/musicap.svg";
import videoap from "../../assets/icons/videoap.svg";
import PostItem from "../Posts/Post/PostItem";
import { useGetAllPostsQuery } from "../../store/postServices/memoriesApi";

const AccountPostsPaper = () => {
  const classes = useStyles();

  return (
    <>
      <Paper sx={{ width: "100%" }}>
        <Typography align="center" className={classes.profileTItle} sx={{ padding: "10px 0" }}>
          News
        </Typography>
        <Grid
          className={classes.flexRow}
          sx={{ padding: "0 16px", justifyContent: "space-between" }}
        >
          <Avatar />
          <form className={classes.postAccPaper}>
            <TextField
              placeholder="What's news ?"
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-notchedOutline": {
                  outline: "none",
                  border: "none",
                },
              }}
            />
          </form>
          <div className={classes.flexRow}>
            <Box className={classes.postAddIcon}>
              <img src={photoap} width="24px" height="24px" alt="photo ap icon" />
            </Box>
            <Box className={classes.postAddIcon}>
              <img src={videoap} width="24px" height="24px" alt="photo ap icon" />
            </Box>
            <Box className={classes.postAddIcon}>
              <img src={musicap} width="24px" height="24px" alt="photo ap icon" />
            </Box>
          </div>
        </Grid>
        <Divider />
      </Paper>
    </>
  );
};

export default AccountPostsPaper;
