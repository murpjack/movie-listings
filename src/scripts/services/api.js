import fetchF from "./futureFetch";
import {
  moviesUrl,
  genresUrl
} from "../constants/api";

export const fetchMovies = () => fetchF(moviesUrl);

export const fetchGenres = () => fetchF(genresUrl);

export {
  fetchMovies,
  fetchGenres
};
