import { FC } from "react";
import logo from "../assets/logo.svg";

const Loader: FC = () => {
  return (
    <div className="loader">
      <img src={logo} className="loader" alt="logo" width="100%" />
    </div>
  );
};

export default Loader;
