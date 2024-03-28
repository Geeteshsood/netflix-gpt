import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const series = useSelector((store) => store.series);

  return (
    <div className="bg-black w-screen">
      <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MovieList
          title={"Now Playing Movies"}
          video={movies.nowPlayingMovies}
        />
        <MovieList title={"Popular Movies"} video={movies.popularMovies} />
        <MovieList title={"Top Rated Movies"} video={movies.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} video={movies.upcomingMovies} />
        <MovieList
          title={"Airing Today TV Shows"}
          video={series.airingTodaySeries}
        />
        <MovieList title={"Popular TV Shows"} video={series.popularSeries} />
        <MovieList title={"Top Rated TV Shows"} video={series.topRatedSeries} />
        <MovieList
          title={"On The Air TV Shows"}
          video={series.onTheAirSeries}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
