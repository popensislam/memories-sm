import { TextField, Grid, InputAdornment, IconButton } from "@mui/material";
import { ChangeEventHandler, FC } from "react";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";

interface InputProps {
  half?: any;
  value: string;
  name: string;
  label: string;
  autoFocus?: boolean;
  type: string;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleShowPassword?: Function | any;
}

const Input: FC<InputProps> = ({
  half,
  name,
  value,
  label,
  autoFocus,
  type,
  handleChange,
  handleShowPassword,
}) => {
  return (
    <Grid item xs={12} sm={half ? 5 : 12}>
      <TextField
        name={name}
        value={value}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === "password" || name == "confirmPassword"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : {}
        }
      />
    </Grid>
  );
};

export default Input;
