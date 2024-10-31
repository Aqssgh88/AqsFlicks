import { useLoaderData } from "react-router-dom";
import { Cards } from "../UI/Card";

export const Movie = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);

  return (
    <ul className="container grid grid-four--cols">
      {moviesData &&
        moviesData.Search.map((curMovie) => {
          return <Cards key={curMovie.imdbID} curMovie={curMovie} />;
        })}
    </ul>
  );
};
