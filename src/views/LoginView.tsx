import { FC } from "react";
import { FormLogin } from "../components";
import { Avatar, Box, Typography } from "@mui/material";
import logo from "../assets/logo.svg";

const LoginView: FC = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <img src={logo} className="logo" alt="logo" width="100%" />
        </Avatar>

        <Typography component="h1" variant="h5">
          SEVERSTAL-REACT
        </Typography>

        <FormLogin />
      </Box>
    </>
  );
};

export default LoginView;
