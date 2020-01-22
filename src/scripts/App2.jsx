import "./../styles/style.scss";
import React, { useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
// import Future from "fluture/index.js";

import Header from "./components/Header";
import InputSlider from "./components/InputSlider";
import GenreList from "./components/GenreList";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";

// import getListGenres from "./helpers/getListGenres";
// import getCurrentMovies from "./helpers/getCurrentMovies";
// import getPresentGenres from "./helpers/getPresentGenres";

import { MovieContext, reducer } from "./context";
import initialState from "./reducers/initialState";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // return Future.both(getCurrentMovies, getListGenres)
    //   .map(addGenreNamesToMovies)
    //   .map(pair => addMoviesAndGenresToObj(pair, state))
    //   .value(obj => {
    //     return dispatch({
    //       type: LOAD_DEFAULT,
    //       payload: obj
    //     });
    //   });
  }, [state.status]);

  return (
    <>
      <MovieContext.Provider value={{ state, dispatch }}>
        <Header />
        <InputSlider />
        <GenreList />
        <MovieList />
        <Footer />
      </MovieContext.Provider>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("movies"));

// function addGenreNamesToMovies(pair) {
//   const allMovies = pair[0];
//   const allGenres = pair[1];
//
//   allMovies.map(thisMovie => {
//     // Loop through each genre attached to each movie
//     const genreNames = thisMovie.genres.map(thisGenre => {
//       // Loop through allGenres, only return [g] from thisMovie genreArray
//       const relevantGenres = allGenres.filter(({ id }) => thisGenre === id);
//       const { name } = relevantGenres[0];
//       return name;
//     });
//     thisMovie.genres = genreNames;
//     return genreNames;
//   });
//
//   // Get a list of all genres on now showing movies
//   const genreListFromEachMovie = allMovies.map(({ genres }) => genres);
//   const presentGenreNames = getPresentGenres(genreListFromEachMovie);
//
//   return [allMovies, presentGenreNames];
// }
//
// function addMoviesAndGenresToObj(pair, { date, page }) {
//   const sortedMovies = pair[0];
//   const sortedGenres = pair[1];
//
//   return {
//     date: date,
//     genres: sortedGenres,
//     movies: sortedMovies,
//     page: page,
//     status: "Successful"
//   };
// }
