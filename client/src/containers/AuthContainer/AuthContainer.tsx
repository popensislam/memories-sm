import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@mui/material";
import { GoogleLogin } from "react-google-login";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useStyles } from "./styles";
import Input from "../../components/Input/Input";
import Icon from "./Icon";

type AuthDataTypes = {
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  email: string;
  image: string;
};

const AuthContainer = () => {
  const classes = useStyles();
  const [authData, setAuthData] = useState<AuthDataTypes>({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    image: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    if(isSignup) {

    } else {
      
    }
  };

  function handleChange(e: any) {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value,
    });
  }

  const googleSuccess = () => {
    console.log('Google AUTH (not working now)');
  };

  const googleFailure = () => {
    console.log("Google AUTH (not working now)");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "SIgn up" : "Sign in"}</Typography>
        <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First name"
                  type="text"
                  value={authData.firstName}
                  autoFocus
                  half
                  handleChange={handleChange}
                />
                <Input
                  name="lastName"
                  label="Last name"
                  type="text"
                  half
                  value={authData.lastName}
                  handleChange={handleChange}
                />
              </>
            )}
            <Input
              name="email"
              label="Email address"
              type="email"
              value={authData.email}
              handleChange={handleChange}
            />
            <Input
              name="password"
              label="Password"
              value={authData.password}
              type={showPassword ? "text" : "password"}
              handleChange={handleChange}
              handleShowPassword={() => setShowPassword((prev) => !prev)}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Confirm password"
                value={authData.password}
                type={showPassword ? "text" : "password"}
                handleChange={handleChange}
                handleShowPassword={() => setShowPassword((prev) => !prev)}
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId="1017101912215-lda0d1jpsciaue11luc667ane9hp27be.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Goggle sign in
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justifyContent="center" sx={{ mt: "12px" }}>
            {isSignup ? (
              <Grid item>
                <Typography>
                  Already have an account?{" "}
                  <span
                    onClick={() => setIsSignup(!isSignup)}
                    className={classes.switch}
                  >
                    Sign in
                  </span>
                </Typography>
              </Grid>
            ) : (
              <Grid item>
                <Typography>
                  Do not have an account?{" "}
                  <span
                    onClick={() => setIsSignup(!isSignup)}
                    className={classes.switch}
                  >
                    Sign up
                  </span>
                </Typography>
              </Grid>
            )}
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AuthContainer;
