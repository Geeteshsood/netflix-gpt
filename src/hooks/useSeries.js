import {
  addOnTheAirSeries,
  addTopRatedSeries,
  addPopularSeries,
  addAiringTodaySeries,
} from "../utils/seriesSlice";
import useFetchMovies from "./useFetchMovies";

export const useAiringTodaySeries = () => {
  useFetchMovies(
    "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
    addAiringTodaySeries
  );
};

export const usePopularSeries = () => {
  useFetchMovies(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    addPopularSeries
  );
};
export const useOnTheAirSeries = () => {
  useFetchMovies(
    "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
    addOnTheAirSeries
  );
};

export const useTopRatedSeries = () => {
  useFetchMovies(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
    addTopRatedSeries
  );
};
