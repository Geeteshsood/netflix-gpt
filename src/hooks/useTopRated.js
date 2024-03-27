import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const dispatch = useDispatch();

  const getTopRated = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await response.json();

    console.log(json);

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRated;
