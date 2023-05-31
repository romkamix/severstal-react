import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { selectIsLoggedIn } from "../store";

const RedirectIfAuthenticatedRoute: FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to="/profile" /> : <Outlet />;
};

export default RedirectIfAuthenticatedRoute;
