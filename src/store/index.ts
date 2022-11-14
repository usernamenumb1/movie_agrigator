import { configureStore, combineReducers } from "@reduxjs/toolkit";
import MovieSlice from "./slices/MovieSlice";
import MoviesAPI from "./API/MoviesAPI";

const rootReducer = combineReducers({
  MovieSlice,
  [MoviesAPI.reducerPath]: MoviesAPI.reducer,
});

export default () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(MoviesAPI.middleware),
});
