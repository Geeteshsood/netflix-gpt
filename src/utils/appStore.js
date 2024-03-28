import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import seriesReducer from "./seriesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    series: seriesReducer,
  },
});

export default appStore;
