import "./../styles/style.scss";

import React from "react";
import ReactDOM from "react-dom";
import Future from "fluture/index.js";
import URL_SHOWING from "./variables";
import moviesNowPLaying from "./movie-data";
import Slider from "react-input-slider";

function App() {
  return (
    <>
      <Header />
      <GenreList />
      <MovieList />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <div className="rating">
      <span className="rating__star"></span>
      <Slider axis="x" x={0} onChange={e => console.log(2, e)} />
    </div>
  );
}
function GenreList() {
  return (
    <div className="genre__list">
      <label className="genre__item">
        <input className="genre__input" type="checkbox" name="genre" />
        <div className="genre__button">Text</div>
      </label>

      <label className="genre__item">
        <input className="genre__input" type="checkbox" name="genre" />
        <div className="genre__button">Text</div>
      </label>

      <label className="genre__item">
        <input className="genre__input" type="checkbox" name="genre" />
        <div className="genre__button">Text</div>
      </label>
    </div>
  );
}

function MovieList() {
  return (
    <>
      <div className="movie">
        <img className="movie__poster" src="" alt="Movie name" />
        <div className="movie__details">
          <h2 className="movie__title">MOVIE</h2>
          <i className="movie__rating">9</i>
          <div className="movie__genre-list">
            <div className="movie__genre">genre</div>
            <div className="movie__genre">genre</div>
          </div>
        </div>
      </div>

      <div className="movie">
        <img className="movie__poster" src="" alt="Movie name" />
        <div className="movie__details">
          <h2 className="movie__title">MOVIE</h2>
          <i className="movie__rating">9</i>
          <div className="movie__genre-list">
            <a className="movie__genre">genre</a>
            <a className="movie__genre">genre</a>
          </div>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <div className="footer">
      <a className="footer__link">Made by Jack Murphy</a>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("movies"));

// function sortMovieList() {}

function sortMovieByRating({ movies }, value) {
  return movies.filter(movie => movie.rating >= value);
}

function sortMovieByGenre(genreList, selected) {
  switch (genreList.length) {
    case 0:
      return "error";
    case 1:
      return genreList.filter(() => genreList[0] === selected);
    case 2:
    case 3:
      return genreList.filter(genre => genre);
    default:
      return genreList;
  }
}
// const data = moviesNowPLaying(URL_SHOWING);

function resetMovieList(data) {
  return Future.of(data).map(sortMoviesByPopularity);
}

function sortMoviesByPopularity(list) {
  console.log(
    2,
    Array.from(list).sort((a, b) => a.result.popularity > b.result.popularity)
  );
  return Array.from(list).sort(
    (a, b) => a.result.popularity > b.result.popularity
  );
}
// return movies.map(({ genreList }) => {
// });
