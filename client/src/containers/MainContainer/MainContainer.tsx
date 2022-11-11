import {
  Avatar,
  Container,
  Divider,
  Grid,
  Grow,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import Form from "../../components/Form/Form";
import NavBar from "../../components/NavBar/NavBar";
import PostsList from "../../components/Posts/PostsList";
import { useAppSelector } from "../../store/hooks";
import { useStyles } from "./style";

import { useState } from "react";
import CategoryPaper from "../../components/Papers/CategoryPaper";
import PersInfoPaper from "../../components/Papers/PersInfoPaper";
import FriendsPaper from "../../components/Papers/FriendsPaper";
import SubscribersPaper from "../../components/Papers/SubscribersPaper";
import AccountPostsPaper from "../../components/Papers/AccountPostsPaper";
import PostItem from "../../components/Posts/Post/PostItem";
import { useGetAllPostsQuery } from "../../store/postServices/memoriesApi";

const catToPick = ["Photo", "Videos", "Musics", "Articles"];
const images = [1, 2, 3, 4];

const MainContainer = () => {
  const { themeMode } = useAppSelector((state) => state.posts);
  const [activeCat, setActiveCat] = useState(0);
  const { data: posts, isFetching, error, refetch } = useGetAllPostsQuery('date');
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Grid className={classes.mainWrapper} sx={{ pt: "16px" }} direction="column">
      <Grid className={classes.flexWrapper} direction="row">
        <PersInfoPaper />
        <Paper elevation={3} className={classes.flexWrapperImg}>
          <Avatar className={classes.avatar} variant="square" />
        </Paper>
      </Grid>
      <Grid className={classes.flexWrapper} sx={{ pt: "16px" }} direction="row">
        <CategoryPaper
          width="60%"
          activeCat={activeCat}
          setActiveCat={setActiveCat}
          catToPick={catToPick}
          images={images}
        />
        <Grid container direction="column" sx={{ width: "39%", gap: "16px" }}>
          <FriendsPaper />
          <SubscribersPaper />
        </Grid>
      </Grid>
      <Grid sx={{marginTop: '16px'}}>
        <AccountPostsPaper />
        <Grid>
          {
          posts !== undefined ?
          posts?.map((post) => (
            <PostItem post={post} />
          ))
          : <Typography>There is no post</Typography>
          }
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainContainer;
