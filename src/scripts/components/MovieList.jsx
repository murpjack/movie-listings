import React, { useContext } from "react";

import { MovieContext } from "../context";

export default function MovieList() {
  const { state } = useContext(MovieContext);
  const { movies } = state;

  return movies.map((movie, mIdx) => {
    const { genres, poster, rating, title } = movie;
    return (
      <div key={mIdx} className="movie">
        <img className="movie__poster" src={poster} alt="Movie name" />
        <div className="movie__details">
          <h2 className="movie__title">{title}</h2>
          <i className="movie__rating">{rating}</i>
          <div className="movie__genre-list">
            {genres.map((g, gIdx) => (
              <div key={gIdx} className="movie__genre">
                {g}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  });
}
