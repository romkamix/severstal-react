import { createSlice } from "@reduxjs/toolkit";
import { INoty, TRootState } from "../types";

const initialState: INoty[] = [];

export const notySlice = createSlice({
  name: "noty",
  initialState,
  reducers: {
    noty: (state, action) => {
      state.push({ type: "", ...action.payload });
    },
    notyInfo: (state, action) => {
      state.push({ type: "info", ...action.payload });
    },
    notySuccess: (state, action) => {
      state.push({ type: "success", ...action.payload });
    },
    notyWarning: (state, action) => {
      state.push({ type: "warn", ...action.payload });
    },
    notyError: (state, action) => {
      state.push({ type: "error", ...action.payload });
    },
  },
});

export const { noty, notyInfo, notySuccess, notyWarning, notyError } =
  notySlice.actions;

export default notySlice.reducer;

export const selectNoties = (state: TRootState) => state.noty;
