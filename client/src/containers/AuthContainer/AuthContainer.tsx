import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from "@mui/material";
import FileBase64 from "react-file-base64";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useStyles } from "./styles";
import Input from "../../components/UI/Input";
import Icon from "./Icon";
import { AuthDataTypes } from "../../pages/AuthPage";
import { ChangeEventHandler, FC } from "react";
import { Link } from "react-router-dom";

interface AuthContainerProps {
  isSignup: boolean;
  authData: AuthDataTypes;
  showPassword: boolean;
  handleSubmit: Function;
  setShowPassword: Function;
  setIsSignup: Function;
  setAuthData: Function;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  googleSuccess: any;
  googleFailure: any;
}

const AuthContainer: FC<AuthContainerProps> = ({
  handleSubmit,
  isSignup,
  setIsSignup,
  authData,
  handleChange,
  showPassword,
  setShowPassword,
  setAuthData,
  googleSuccess,
  googleFailure,
}) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.authContainer}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "SIgn up" : "Sign in"}</Typography>
        <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
          <Grid container spacing={2}>
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
              handleShowPassword={() => setShowPassword((prev: boolean) => !prev)}
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>
          <Grid container justifyContent="center" sx={{ mt: "12px" }}>
            <Grid item>
              <Typography>
                Do not have an account?{" "}
                <Link to="/reg" className={classes.switch}>
                  Sign up
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AuthContainer;
