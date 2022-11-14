/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { MovieStore } from "../../interfaces";

const initialState: MovieStore = {
  currentMovie: null,
};

const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, { payload }) => {
      state.currentMovie = payload;
    },
  },
});

export const { addMovie } = MovieSlice.actions;
export default MovieSlice.reducer;
