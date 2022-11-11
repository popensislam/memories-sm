import { Grid, Typography } from "@mui/material";
import { useRef, useState } from "react";
import Form from "../../components/Form/Form";
import { useStyles } from "./style";

interface IAuthData {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  selectedFile: string;
}

const RegContainer = () => {
  const classes = useStyles();

  const [fullInfoUser, setFullInfoUser] = useState({});

  const handleSubmit = async (authData: IAuthData) => {
    setFullInfoUser({ ...authData });
    handleMove();
  };

  const handleSubmitInfo = async (authData: any) => {

  }

  // Animation
  const blockRef: any = useRef();
  const blockRef2: any = useRef();
  const handleMove = (): void => {
    blockRef.current.style.left = "-2000px";
    blockRef.current.style.top = "-2000px";
    setTimeout(() => {
      blockRef2.current.style.top = "0";
      blockRef2.current.style.left = "0";
    }, 500);
  };

  return (
    <div className={classes.regWrapper}>
      <div ref={blockRef} className={classes.animationWrapper}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.titleSide}
        >
          <Typography className={classes.signUpTitle}>Sign Up on THE SPHERE</Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.formSide}
        >
          <Form handleSubmit={handleSubmit} />
        </Grid>
      </div>
      <div ref={blockRef2} className={classes.animationWrapper2}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.titleSide}
        >
          <Typography className={classes.signUpTitle}>Tell people about yourself</Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.formSide}
        >
          
        </Grid>
      </div>
    </div>
  );
};

export default RegContainer;
