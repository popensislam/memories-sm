import { FC, useEffect, useState } from "react";

// MUI
import {
  Card,
  CardMedia,
  Typography,
  Button,
  CardContent,
  CardActions,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";

// INTERFACES
import { PostProps } from "../interfaces";

// RTK
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setCurrentId } from "../../../store/slices/postsSlice";
import { fetchDeletePost, fetchLikePost } from "../../../store/postServices";
import {
  useDeletePostMutation,
  useGetPostCommentsFirstTimeMutation,
  useGetPostCommentsMutation,
  useLikePostMutation,
} from "../../../store/postServices/memoriesApi";

// STYLES
import { useStyles } from "./styles";
import FullDialog from "../../UI/FullDialog";
import socket from "../../..";

const PostItem: FC<PostProps> = ({ post }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.users);
  const [deletePost] = useDeletePostMutation();
  const [likePost] = useLikePostMutation();
  const [getComments] = useGetPostCommentsMutation();
  const [getFirstComments] = useGetPostCommentsFirstTimeMutation();

  const [likeCount, setLikeCount] = useState(post?.likeCount);
  const [openDialog, setOpenDialog] = useState(false);
  const [messages, setMessages] = useState(null);

  // DROPDOWN
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // DIALOG OF COMMENTS
  const handleClickOpenDialog = () => {
    setOpenDialog(true);
    const data: any = getFirstComments(post._id);
    console.log(data);
  };

  const onSendComment = (message: string) => {
    getComments({
      postId: post._id,
      username: currentUser?.username,
      userImg: currentUser?.mainImage,
      message,
    });
  };

  useEffect(() => {
    socket.on("getComments", (data: any) => {
      setMessages(data.comments);
    });
  }, []);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // FETCHS
  const handleSetId = () => {
    dispatch(setCurrentId(post));
  };
  const handleLike = async () => {
    await fetchLikePost(post._id, likePost);
    setLikeCount((prev) => prev + 1);
  };
  const handleDelete = async () => {
    await fetchDeletePost(post._id, deletePost);
  };

  return (
    <Card className={classes.card}>
      <FullDialog
        onSendComment={onSendComment}
        openDialog={openDialog}
        handleCloseDialog={handleCloseDialog}
        messages={messages}
        postId={post._id}
      />
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creatorUsername}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button sx={{ color: "white" }} size="small" onClick={handleOpen}>
          <MoreHorizIcon fontSize="medium" />
        </Button>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>Edit</MenuItem>
          <Divider />
          <MenuItem onClick={handleDelete}>
            <DeleteIcon fontSize="small" />
            &nbsp;Delete post&nbsp;
          </MenuItem>
        </Menu>
      </div>
      <div className={classes.details}>
        <Typography>{post.tags.map((tag: string) => ` #${tag}`)}</Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button onClick={() => handleLike()} size="small" color="primary">
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;Like&nbsp;
          {likeCount}
        </Button>
        <Button size="small" color="primary" onClick={handleClickOpenDialog}>
          <DeleteIcon fontSize="small" />
          &nbsp;Comment&nbsp;
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostItem;
