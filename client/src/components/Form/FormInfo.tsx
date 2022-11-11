import { Button } from "@mui/material";
import { ChangeEvent, useState, FC, ChangeEventHandler } from "react";

import "react-toastify/dist/ReactToastify.css";
import { useStyles } from "./styles";
import Input from "../UI/Input";

const FormInfo = () => {

  const classes = useStyles();
  const [authData, setAuthData] = useState<any>({
    status: "",
    interestedIn: "",
    phone: "",
    country: "",
    city: "",
    website: '',
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const clear = () => {
    setAuthData({
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      selectedFile: "",
    });
  };

  return ( 
    <form
    className={classes.form}  
    onSubmit={(e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      handleSubmit(authData)}}
  >
    <Input
      name="email"
      label="Email address"
      type="email"
      half
      value={authData.email}
      handleChange={handleOnChange}
      autoFocus
    />
    <Input
      name="username"
      label="Username"
      type="text"
      half
      value={authData.username}
      handleChange={handleOnChange}
    />
    <Input
      name="first_name"
      label="First name"
      type="text"
      value={authData.first_name}
      half
      handleChange={handleOnChange}
    />
    <Input
      name="last_name"
      label="Last name"
      type="text"
      half
      value={authData.last_name}
      handleChange={handleOnChange}
    />
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
  </form>
   );
}
 
export default FormInfo;