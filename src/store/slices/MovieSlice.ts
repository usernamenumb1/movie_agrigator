/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { UserDataStore } from "../../interfaces";

const initialState: UserDataStore = {
  favorits: [],
  history: [],
};

const userDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addFavorits: (state, { payload }) => {
      state.favorits = payload;
    },
    removeFavorit: (state, { payload }) => {
      const filtredFavorits = state.favorits.filter((id) => id !== payload);
      state.favorits = [...filtredFavorits];
    },
  },
});

export const { addFavorits } = userDataSlice.actions;
export default userDataSlice.reducer;
