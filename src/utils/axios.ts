//! @/utils/axios.js
import axios from "axios";
import store from "../store";
import { notyError, logout } from "../store";

axios.defaults.baseURL = process.env.REACT_APP_API || "";
axios.defaults.withCredentials = true;

// axios.interceptors.request.use(
//   (config) => {
//     config.headers = {
//       "Content-Type": "application/json",
//     };
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.config && !error.config.__isRetryRequest) {
        store.dispatch(
          notyError({
            title: `XHR: ${error.response.status}`,
            text: error.response.data.message || "",
          })
        );

        switch (error.response.status) {
          case 401:
          case 419:
            store.dispatch(logout());
            break;

          default:
            break;
        }
      }
    } else if (error.request) {
    } else {
    }

    return Promise.reject(error);
  }
);

export default axios;
