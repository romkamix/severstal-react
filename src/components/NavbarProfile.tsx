import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { login, logoutAsync, selectIsLoggedIn } from "../store";
import { useAppSelector, useAppDispatch } from "../hooks";
import { auth as api } from "../api";
import { useEffect } from "react";

function NavbarProfile() {
  const navigate = useNavigate(),
    dispatch = useAppDispatch(),
    isLoggedIn = useAppSelector(selectIsLoggedIn),
    handleClick = () => dispatch(logoutAsync()),
    handleNavigate = (to: string) => navigate(to);

  useEffect(() => {
    if (isLoggedIn) {
      api
        .user()
        .then(({ data }) => dispatch(login(data.data)))
        .catch((e) => console.log(e));
    }

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <Button onClick={handleClick} sx={{ color: "white" }}>
          Logout
        </Button>
      ) : (
        <Button
          onClick={() => handleNavigate("/login")}
          sx={{ color: "white" }}
        >
          Login
        </Button>
      )}
    </>
  );
}

export default NavbarProfile;
