import MovieCard from "./MovieCard";

const MovieList = ({ title, video }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div
        className="flex overflow-x-scroll"
        style={{ "-ms-overflow-style": "none", "scrollbar-width": "none" }}
      >
        <div className="flex">
          {video?.map((clip) => (
            <MovieCard key={clip.id} posterPath={clip.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
