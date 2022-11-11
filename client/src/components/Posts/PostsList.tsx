import React, { useEffect } from "react";
import { useGetAllPostsQuery } from "../../store/postServices/memoriesApi";
import PostItem from "./Post/PostItem";
import { useStyles } from "./styles";
import { Grid, CircularProgress } from "@mui/material";
import { Posts } from "../../store/interfaces";
import { useAppSelector } from "../../store/hooks";
import { useTheme } from '@mui/material/styles';

const PostsList = () => {
  const classes = useStyles();
  const theme = useTheme()
  const { currentPost, actAddPost } = useAppSelector((state) => state.posts);
  const { data: posts, isFetching, error, refetch } = useGetAllPostsQuery();

  useEffect(() => {
    if (currentPost === null) {
        refetch();
    }
  }, [currentPost, actAddPost]);

  if (isFetching) {
    return (
      <Grid
        sx={{ width: "100%", height: "100%", display: "flex" }}
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Grid>
    );
  }

  if (error) {
    return <h1>Something went wrogn :(</h1>;
  }

  return (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts?.map((post: Posts) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <PostItem post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostsList;