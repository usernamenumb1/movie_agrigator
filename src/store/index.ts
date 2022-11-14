import { configureStore, combineReducers } from "@reduxjs/toolkit";
import movieSlice from "./slices/MovieSlice";
import moviesAPI from "./API/MoviesAPI";

const rootReducer = combineReducers({
  movieSlice,
  [moviesAPI.reducerPath]: moviesAPI.reducer,
});

export default () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(moviesAPI.middleware),
});
