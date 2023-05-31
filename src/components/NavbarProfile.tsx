import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { logout, selectIsLoggedIn } from "../store";
import { useAppSelector, useAppDispatch } from "../hooks";

function NavbarProfile() {
  const navigate = useNavigate(),
    dispatch = useAppDispatch(),
    isLoggedIn = useAppSelector(selectIsLoggedIn),
    handleClick = () => dispatch(logout()),
    handleNavigate = (to: string) => navigate(to);

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
