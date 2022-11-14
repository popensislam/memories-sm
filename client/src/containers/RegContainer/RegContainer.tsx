import { Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "../../components/Form/Form";
import FormInfo from "../../components/Form/FormInfo";
import { useRegUserMutation } from "../../store/authServices/authApi";
import { useAppDispatch } from "../../store/hooks";
import { setCurrentUser } from "../../store/slices/userSlice";
import { useStyles } from "./style";

interface IAuthData {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  selectedFile: string;
}
interface AuthDataInfo {
  status: string;
  interestedIn: string;
  phone: string;
  country: string;
  city: string;
  website: string;
}

const RegContainer = () => {
  const classes = useStyles();
  const [useReg, { error }]: any = useRegUserMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [fullInfoUser, setFullInfoUser] = useState({});
  const [showRef2, setShowRef2] = useState(false);

  useEffect(() => {
    if (error?.status === 400 || error?.status === 500) {
      toast.error(error?.data.message);
      handleMoveBack();
    }
  }, [error]);

  const handleSubmit = async (authData: IAuthData) => {
    setFullInfoUser({ ...authData });
    handleMove();
  };

  const handleSubmitInfo = async (authData: AuthDataInfo) => {
    setFullInfoUser({ ...fullInfoUser, ...authData });
    const { data }: any = await useReg({ ...fullInfoUser, ...authData });
    if (data) {
      dispatch(setCurrentUser(data.result));
      localStorage.setItem("access", data.token);
      navigate("/");
    }
  };

  // Animation
  const blockRef: any = useRef();
  const blockRef2: any = useRef();
  const handleMove = (): void => {
    blockRef.current.style.left = "-2000px";
    blockRef.current.style.top = "-2000px";
    setTimeout(() => {
      blockRef2.current.style.top = "0";
      blockRef2.current.style.left = "0";
      setShowRef2(true);
    }, 500);
  };
  const handleMoveBack = (): void => {
    blockRef2.current.style.left = "-2000px";
    blockRef2.current.style.top = "-2000px";
    setTimeout(() => {
      blockRef.current.style.top = "0";
      blockRef.current.style.left = "0";
      setShowRef2(true);
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
        {showRef2 && (
          <>
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
              <FormInfo handleSubmitInfo={handleSubmitInfo} />
            </Grid>
          </>
        )}
      </div>
    </div>
  );
};

export default RegContainer;
