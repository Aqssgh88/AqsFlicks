import { NavLink, useLoaderData } from "react-router-dom";
import "./MovieCardsDetails.css";

export const MovieDetails = () => {
  const movieData = useLoaderData();
  console.log(movieData);

  // Destructure properties from movieData and use optional chaining
  const { Actors, Poster, Title, Type, Year, Plot, BoxOffice, imdbID } = movieData || {};

  // Check if movieData exists
  if (!movieData) {
    return <p>Loading movie details...</p>;
  }

  return (
    <li className="hero-containerr hero-movie-container">
      <div className="main-containerr">
        <div className="poster-containerr">
          <img src={Poster} className="poster" alt={Title} />
        </div>
        <div className="ticket-containerr">
          <div className="ticket-contentt">
            <h4 className="ticket_movie-title">{Title}</h4> {/* Display title */}
            <p className="ticket_current-title">Actors: {Actors}</p>
            <p className="ticket_current-title">Type: {Type}</p>
            <p className="ticket_current-title">Year: {Year}</p>
            <p className="ticket_current-title">Plot: {Plot}</p>
            <p className="ticket_current-title">Box Office: {BoxOffice}</p>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <button className="ticket_buy-btn">Watch Now</button>
            </a>

          </div>
        </div>
      </div>
    </li>
  );
};
