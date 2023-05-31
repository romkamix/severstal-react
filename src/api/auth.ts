//! @/api/_auth.js
import { axios } from "../utils";
import { ICredentials } from "../types";

const auth = {
  user: () => axios.get("user"),
  csrf: () => axios.get("sanctum/csrf-cookie"),
  login: (payload: ICredentials) => axios.post("login", payload),
  logout: () => axios.get("logout"),
};

export default auth;
