import React, { useContext } from "react";
import Slider from "react-input-slider";

import { MovieContext } from "../context";

export default function Header() {
  const { state, dispatch } = useContext(MovieContext);
  const { movies } = state;

  function sortMovieByRating(value) {
    const sortedMovies = movies.filter(movie => movie.rating >= value);

    const genreListFromEachMovie = sortedMovies.map(({ genres }) => genres);
    const sortedGenres = getPresentGenres(genreListFromEachMovie);

    dispatch({
      type: SORTBY_RATING,
      payload: {
        date: state.date,
        genres: sortedGenres,
        movies: sortedMovies,
        page: state.page
      }
    });
  }

  return (
    <div className="rating">
      <span className="rating__star"></span>
      <Slider
        axis="x"
        x={3}
        xstep={0.5}
        xmin={0}
        xmax={10}
        onDragEnd={e => {
          console.log(2, e);
          return sortMovieByRating(e.target.value);
        }}
      />
    </div>
  );
}
