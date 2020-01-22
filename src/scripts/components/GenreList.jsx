import React, { useContext } from "react";
import { MovieContext } from "../context";

export default function GenreList() {
  const { state } = useContext(MovieContext);
  const { genres } = state;

  return (
    <div className="genre__list">
      {genres.map((genre, idx) => (
        <label key={idx} className="genre__item">
          <input
            className="genre__input"
            onChange={() => console.log(genre)}
            type="checkbox"
            name="genre"
          />
          <div className="genre__button">{genre}</div>
        </label>
      ))}
    </div>
  );
}

// import getPresentGenres from "../helpers/getPresentGenres";
// function sortMovieByGenre(selected) {
//   const sortedMovies = movies.filter(
//     thisMovie => thisMovie.genres.indexOf(selected) > -1
//   );
//
//   const genreListFromEachMovie = sortedMovies.map(({ genres }) => genres);
//   const sortedGenres = getPresentGenres(genreListFromEachMovie);
//
//   console.log(321, sortedGenres);
//   return dispatch({
//     type: SORTBY_GENRE,
//     payload: {
//       date: state.date,
//       genres: sortedGenres,
//       movies: sortedMovies,
//       page: state.page,
//       status: "Successful"
//     }
//   });
// }
