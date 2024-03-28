import {
  addUpcomingMovies,
  addTopRatedMovies,
  addPopularMovies,
  addNowPlayingMovies,
} from "../utils/movieSlice";
import useFetchMovies from "./useFetchMovies";

export const useNowPlayingMovies = () => {
  useFetchMovies(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    addNowPlayingMovies
  );
};

export const usePopularMovies = () => {
  useFetchMovies(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    addPopularMovies
  );
};
export const useUpcomingMovies = () => {
  useFetchMovies(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    addUpcomingMovies
  );
};

export const useTopRatedMovies = () => {
  useFetchMovies(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    addTopRatedMovies
  );
};
