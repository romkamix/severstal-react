import { createSlice } from "@reduxjs/toolkit";
import { auth as api } from "../api";
import { IAuthState, ICredentials, TRootState } from "../types";

const initialState: IAuthState = {
  user: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setAuthIsLoading: (state) => {
      state.isLoading = true;
    },
    setAuthIsLoaded: (state) => {
      state.isLoading = false;
    },
    setAuthError: (state, { payload }) => {
      state.error = payload;
    },
    clearAuthError: (state) => {
      state.error = null;
    },
  },
});

// ACTIONS
export const {
  login,
  logout,
  setAuthError,
  clearAuthError,
  setAuthIsLoading,
  setAuthIsLoaded,
} = authSlice.actions;

export const loginAsync = (payload: ICredentials) => ({
  type: "LOGIN_ASYNC",
  payload,
});

// ASYNC ACTIONS
//! -------------- ТИПИЗИРОВАТЬ dispatch!!! ---------------------------
// export const loginAsync = (payload: ICredentials) => (dispatch: any) => {
//   dispatch(setAuthIsLoading());

//   api
//     .csrf()
//     .then(() => api.login(payload))
//     .then(() => api.user())
//     .then(({ data: { data } }) => dispatch(login(data)))
//     .catch((e) =>
//       dispatch(setAuthError("Invalid credentials"))
//     )
//     .then(() => dispatch(setAuthIsLoaded()));
// };

export const logoutAsync = () => (dispatch: any) => {
  dispatch(setAuthIsLoading());

  api
    .logout()
    .then(() => dispatch(logout()))
    .catch((e) => console.log(e))
    .then(() => dispatch(setAuthIsLoaded()));
};

// SELECTORS
export const selectUser = (state: TRootState) => state.auth.user;
export const selectAuthError = (state: TRootState) => state.auth.error;
export const selectIsLoggedIn = (state: TRootState) => Boolean(state.auth.user);
export const selectAuthIsLoading = (state: TRootState) => state.auth.isLoading;

// DEFAULT
export default authSlice.reducer;
