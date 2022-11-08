import { useState } from "react";

import { AppBar, Container, Grid, Grow, Typography } from "@mui/material";
import { createUseStyles, ThemeProvider } from "react-jss";
import { theme } from "./Theme";

import memories from "./assets/memories.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/PostsList";
import { ToastContainer } from "react-toastify";

const useStyles = createUseStyles({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  memoriesLogo: {
    marginLeft: "15px",
  },
  memoriesTitle: {
    color: "rgba(0,183,255,1)",
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography
            className={classes.memoriesTitle}
            variant="h2"
            align="center"
          >
            Memories
          </Typography>
          <img
            className={classes.memoriesLogo}
            src={memories}
            alt="memories"
            height="60"
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ThemeProvider>
  );
}

export default App;
