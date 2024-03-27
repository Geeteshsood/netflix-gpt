import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos",
      API_OPTIONS
    );

    const json = await response.json();

    const filterMovies = json.results?.filter((mv) => {
      return mv.type === "Trailer";
    });

    const trailer = filterMovies?.length ? filterMovies[0] : json.results[0];

    dispatch(addTrailerVideo(trailer.key));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
