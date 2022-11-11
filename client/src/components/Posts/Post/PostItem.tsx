import { FC, useEffect, useState } from "react";

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
import { fetchDeletePost, fetchLikePost } from "../../../store/postServices";
import {
  useDeletePostMutation,
  useLikePostMutation,
} from "../../../store/postServices/memoriesApi";

// STYLES
import { useStyles } from "./styles";

const PostItem: FC<PostProps> = ({ post }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [deletePost] = useDeletePostMutation();
  const [likePost] = useLikePostMutation();

  const [likeCount, setLikeCount] = useState(post?.likeCount);

  const handleSetId = () => {
    dispatch(setCurrentId(post));
  };
  const handleLike = async () => {
    try {
      await fetchLikePost(post._id, likePost);
      setLikeCount((prev) => prev + 1);
    } catch (e) {
      console.warn(e);
    }
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
        <Typography>{post.tags.map((tag: string) => ` #${tag}`)}</Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button onClick={() => handleLike()} size="small" color="primary">
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;Like&nbsp;
          {likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => fetchDeletePost(post._id, deletePost)}
        >
          <DeleteIcon fontSize="small" />
          &nbsp;Delete&nbsp;
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostItem;
