import { Button, Grid } from "@mui/material";
import { ChangeEvent, useState, FC, ChangeEventHandler } from "react";

import "react-toastify/dist/ReactToastify.css";
import { useStyles } from "./styles";
import Input from "../UI/Input";

interface AuthDataInfo {
  status: string;
  interestedIn: string;
  phone: string;
  country: string;
  city: string;
  website: string;
}

const FormInfo: FC<{ handleSubmitInfo: ChangeEventHandler<HTMLFormElement> | Function }> = ({
  handleSubmitInfo,
}) => {
  const classes = useStyles();
  const [authData, setAuthData] = useState<AuthDataInfo | any>({
    status: "",
    interestedIn: "",
    phone: "",
    country: "",
    city: "",
    website: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const clear = () => {
    setAuthData({
      status: "",
      interestedIn: "",
      phone: "",
      country: "",
      city: "",
      website: "",
    });
  };

  return (
    <form
      className={classes.form}
      onSubmit={(e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmitInfo(authData);
      }}
    >
      <Input
        name="status"
        label="Status"
        type="text"
        half
        value={authData.status}
        handleChange={handleOnChange}
        autoFocus
      />
      <Input
        name="interestedIn"
        label="What you are interested in"
        type="text"
        half
        value={authData.interestedIn}
        handleChange={handleOnChange}
      />
      <Input
        name="phone"
        label="Phone"
        type="text"
        value={authData.phone}
        half
        handleChange={handleOnChange}
      />
      <Input
        name="website"
        label="Link of your website"
        type="text"
        half
        value={authData.website}
        handleChange={handleOnChange}
      />
      <Input
        name="country"
        label="Country"
        type="text"
        half
        value={authData.country}
        handleChange={handleOnChange}
      />
      <Input
        name="city"
        label="City"
        type="text"
        half
        value={authData.city}
        handleChange={handleOnChange}
      />
      <Grid sx={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="error"
          size="large"
          onClick={clear}
        >
          Clear
        </Button>
      </Grid>
    </form>
  );
};

export default FormInfo;
