import { Container, Grid, Grow, useTheme } from "@mui/material";
import Form from "../../components/Form/Form";
import NavBar from "../../components/NavBar/NavBar";
import PostsList from "../../components/Posts/PostsList";
import { useAppSelector } from "../../store/hooks";

const MainContainer = () => {
  const { themeMode } = useAppSelector((state) => state.posts);
  const theme = useTheme();

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          sx={{
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column-reverse",
            },
          }}
        >
          <Grid item xs={12} sm={7}>
            <PostsList />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default MainContainer;
