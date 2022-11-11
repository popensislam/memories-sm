import React, { useCallback, useEffect } from "react";

import { AppBar, Avatar, Toolbar, Typography, Button, Container, Grid, Box } from "@mui/material";
import AccountMenu from "../UI/AccountMenu";
import { toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useGetUserQuery } from "../../store/authServices/authApi";
import { setCurrentUser } from "../../store/slices/userSlice";

import memories from "../../assets/memories-Logo.png";
import { useStyles } from "./styles";

const NavBar = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  const token: string | null = localStorage.getItem("access");
  const { data, error, refetch }: any = useGetUserQuery(token, { skip: !token });
  const { currentUser } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error?.status === 401) {
      localStorage.setItem("access", error.data.newToken);
      refetch()
    }
    if (data) {
      dispatch(setCurrentUser(data?.user));
    }
  }, [data, error]);

  const handleLogOut = useCallback(() => {
    localStorage.removeItem('access')
    dispatch(setCurrentUser(null))
    navigate('/auth')
  }, [])

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Container>
        <Grid container justifyContent="space-between">
          <Box className={classes.brandContainer} component={Link} to='/'>
            <img className={classes.memoriesLogo} src={memories} alt="memories" height="50" />
          </Box>
          <AccountMenu currentUser={currentUser} handleLogOut={handleLogOut}/>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default React.memo(NavBar);
