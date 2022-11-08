import { FC, useEffect } from "react";

// MUI
import {
  Card,
  CardMedia,
  Typography,
  Button,
  CardContent,
  CardActions,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";

// INTERFACES
import { PostProps } from "../interfaces";

// RTK
import { useAppDispatch } from "../../../store/hooks";
import { setCurrentId } from "../../../store/slices/postsSlice";
import { handleDeletePost, handleLikePost } from "../../../store/services";
import { useDeletePostMutation, useLikePostMutation } from "../../../store/services/memoriesApi";

// STYLES
import { useStyles } from "./styles";

const PostItem: FC<PostProps> = ({ post }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [deletePost] = useDeletePostMutation();
  const [likePost] = useLikePostMutation();

  const handleSetId = () => {
    dispatch(setCurrentId(post));
  };
 

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button sx={{ color: "white" }} size="small" onClick={handleSetId}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography>{post.tags.map((tag: string) => `#${tag}`)}</Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button onClick={() => handleLikePost(post._id, likePost)} size="small" color="primary">
          <ThumbUpAltIcon fontSize="small" />
          Like
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => handleDeletePost(post._id, deletePost)}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostItem;
