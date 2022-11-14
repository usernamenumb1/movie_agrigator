/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { MovieStore } from "../../interfaces";

const initialState: MovieStore = {
  currentMovie: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, { payload }) => {
      state.currentMovie = payload;
    },
  },
});

export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;
