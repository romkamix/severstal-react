import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { ICredentials } from "../types/auth";
import {
  // FormControl,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  loginAsync,
  clearAuthError,
  selectAuthError,
  selectAuthIsLoading,
} from "../store";

const FormLogin: FC = () => {
  const dispatch = useAppDispatch(),
    error = useAppSelector(selectAuthError),
    isLoading = useAppSelector(selectAuthIsLoading),
    [state, setState] = useState<ICredentials>({
      name: "",
      password: "",
    });

  useEffect(() => {
    dispatch(clearAuthError());
    // eslint-disable-next-line
  }, [state]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginAsync(state));
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setState({ ...state, [e.target.name]: e.target.value });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        mt: 1,
        width: {
          xs: "100%",
          sm: 400,
        },
      }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="username"
        name="name"
        autoFocus
        onChange={handleChange}
        disabled={isLoading}
      />

      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="password"
        type="password"
        id="password"
        onChange={handleChange}
        disabled={isLoading}
      />

      {error && <Typography color="red">{error}</Typography>}

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={isLoading}
      >
        Sign In
      </Button>
    </Box>
  );
};

export default FormLogin;
