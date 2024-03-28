import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovies = (fetchUrl, actionCreator) => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const response = await fetch(fetchUrl, API_OPTIONS);
    const json = await response.json();
    dispatch(actionCreator(json.results));
  };

  useEffect(() => {
    getMovies();
  }, []);
};
export default useMovies;
