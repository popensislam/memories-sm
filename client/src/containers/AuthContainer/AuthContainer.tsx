import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from "@mui/material";
import FileBase64 from "react-file-base64";
import { GoogleLogin } from "react-google-login";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useStyles } from "./styles";
import Input from "../../components/UI/Input";
import Icon from "./Icon";
import { AuthDataTypes } from "../../pages/AuthPage";
import { ChangeEventHandler, FC } from "react";

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
            {/* {isSignup && (
              <>
                <Input
                  name="confirmPassword"
                  label="Confirm password"
                  value={authData.confirmPassword}
                  type={showPassword ? "text" : "password"}
                  handleChange={handleChange}
                  handleShowPassword={() => setShowPassword((prev: boolean) => !prev)}
                />
                <Grid item xs={12} sm={12}>
                  <FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }: string | any) => {
                      setAuthData({ ...authData, image: base64 });
                    }}
                  />
                </Grid>
              </>
            )} */}
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
          <GoogleLogin
            clientId="1017101912215-lda0d1jpsciaue11luc667ane9hp27be.apps.googleusercontent.com"
            render={(renderProps: any) => (
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
            <Grid item>
              <Typography>
                Do not have an account?{" "}
                <span onClick={() => setIsSignup(!isSignup)} className={classes.switch}>
                  Sign up
                </span>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AuthContainer;
