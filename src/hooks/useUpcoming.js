import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcoming = () => {
  const dispatch = useDispatch();

  const getUpcoming = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await response.json();

    console.log(json);

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcoming();
  }, []);
};

export default useUpcoming;
