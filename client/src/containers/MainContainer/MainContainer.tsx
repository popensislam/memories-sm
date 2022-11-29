import { Avatar, Grid, Paper, Typography, useTheme, Box } from "@mui/material";
import { useAppSelector } from "../../store/hooks";
import { useStyles } from "./style";

import { ChangeEvent, useEffect, useState } from "react";
import CategoryPaper from "../../components/Papers/CategoryPaper";
import PersInfoPaper from "../../components/Papers/PersInfoPaper";
import FriendsPaper from "../../components/Papers/FriendsPaper";
import SubscribersPaper from "../../components/Papers/SubscribersPaper";
import AccountPostsPaper from "../../components/Papers/AccountPostsPaper";
import PostItem from "../../components/Posts/Post/PostItem";
import {
  useAddPostMutation,
  useGetAllPostsQuery,
  useGetUserPostsQuery,
} from "../../store/postServices/memoriesApi";
import { useParams } from "react-router-dom";
import { useGetUserByParamsQuery } from "../../store/authServices/authApi";

const catToPick = ["Photo", "Videos", "Musics", "Articles"];
const images = [1, 2, 3, 4];

const MainContainer = () => {
  const { username } = useParams();
  const { themeMode } = useAppSelector((state) => state.posts);
  const [activeCat, setActiveCat] = useState(0);
  const [addPostData, setAddPostData] = useState({
    value: "",
    message: "",
    file: "",
  });
  const { currentUser } = useAppSelector((state) => state.users);
  const { data: posts } = useGetUserPostsQuery(username);
  const { data: user, isFetching } = useGetUserByParamsQuery(username);

  const isOwner = currentUser?.username === username;
  const actUser = currentUser?.username === username ? currentUser : user?.user;

  const [useAddPost] = useAddPostMutation();
  const classes = useStyles();

  const handleSubmitForm = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    useAddPost({
      title: addPostData.value,
      message: addPostData.message,
      selectedFile: addPostData.file,
      creatorId: currentUser?._id,
      creatorUsername: currentUser?.username,
      creatorImg: currentUser?.mainImage,
    });
  };

  if (isFetching) return <h1>Loading</h1>;

  return (
    <Box className={classes.mainWrapper} sx={{ pt: "16px", flexWrap: "none" }}>
      <Grid className={classes.flexWrapper} container direction="row">
        <PersInfoPaper currentUser={actUser} />
        <Paper elevation={3} className={classes.flexWrapperImg}>
          <Avatar className={classes.avatar} src={actUser?.mainImage} variant="square" />
        </Paper>
      </Grid>
      <Grid className={classes.flexWrapper} sx={{ pt: "16px" }} container direction="row">
        <CategoryPaper
          width="60%"
          activeCat={activeCat}
          setActiveCat={setActiveCat}
          catToPick={catToPick}
          images={images}
        />
        <Grid container direction="column" sx={{ width: "39%", gap: "16px" }}>
          <FriendsPaper currentUser={actUser} />
          <SubscribersPaper currentUser={actUser} />
        </Grid>
      </Grid>
      <Grid sx={{ marginTop: "16px" }}>
        {isOwner && (
          <AccountPostsPaper
            handleSubmitForm={handleSubmitForm}
            addPostData={addPostData}
            setAddPostData={setAddPostData}
          />
        )}
        <Grid>
          {posts !== undefined ? (
            posts?.map((post: any) => <PostItem key={post._id} post={post} />)
          ) : (
            <Typography>There is no post</Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContainer;
