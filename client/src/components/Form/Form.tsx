import { Button } from "@mui/material";
import { ChangeEvent, useState, FC, ChangeEventHandler } from "react";
import FileBase64 from "react-file-base64";

import { useStyles } from "./styles";
import Input from "../UI/Input";
import { toast } from "react-toastify";

interface IForm {
  handleSubmit: ChangeEventHandler<HTMLFormElement> | Function;
}

const Form: FC<IForm> = ({ handleSubmit }) => {
  const classes = useStyles();
  const [authData, setAuthData] = useState<any>({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    selectedFile: "",
  });
  const [showPassword, setShowPassword] = useState(false);

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
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <form
      className={classes.form}
      onSubmit={(e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (authData.password === authData.confirmPassword) {
          handleSubmit(authData);
        } else {
          toast.error("Passwords do not match!")
        }
      }}
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
      <Input
        name="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        half
        value={authData.password}
        handleChange={handleOnChange}
        handleShowPassword={() => setShowPassword(!showPassword)}
      />
      <Input
        name="confirmPassword"
        label="Confirm password"
        type={showPassword ? "text" : "password"}
        half
        value={authData.confirmPassword}
        handleChange={handleOnChange}
        handleShowPassword={() => setShowPassword(!showPassword)}
      />
      <div className={classes.fileInput}>
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }: string | any) => {
            setAuthData({ ...authData, selectedFile: base64 });
          }}
        />
      </div>
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
};

export default Form;
