import { createSlice } from "@reduxjs/toolkit";

const seriesSlice = createSlice({
  name: "series",
  initialState: {},
  reducers: {
    addAiringTodaySeries: (state, action) => {
      state.airingTodaySeries = action.payload;
    },
    addPopularSeries: (state, action) => {
      state.popularSeries = action.payload;
    },
    addTopRatedSeries: (state, action) => {
      state.topRatedSeries = action.payload;
    },
    addOnTheAirSeries: (state, action) => {
      state.onTheAirSeries = action.payload;
    },
  },
});

export const {
  addAiringTodaySeries,
  addPopularSeries,
  addTopRatedSeries,
  addOnTheAirSeries,
} = seriesSlice.actions;

export default seriesSlice.reducer;
