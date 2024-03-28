import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

import {
  useNowPlayingMovies,
  usePopularMovies,
  useUpcomingMovies,
  useTopRatedMovies,
} from "../hooks/useMovies";

import {
  useAiringTodaySeries,
  usePopularSeries,
  useOnTheAirSeries,
  useTopRatedSeries,
} from "../hooks/useSeries";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useAiringTodaySeries();
  usePopularSeries();
  useTopRatedSeries();
  useOnTheAirSeries();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
