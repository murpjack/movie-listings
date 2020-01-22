import {
  GENRES_LOADING,
  GENRES_LOAD_SUCCESS,
  GENRES_LOAD_ERROR,
  GENRE_TOGGLE
} from "./constants";
import { fetchGenres } from "../services/api";

const genresLoading = payload => ({
  type: GENRES_LOADING,
  payload
});

const genresLoadSuccess = payload => ({
  type: GENRES_LOAD_SUCCESS,
  payload
});

const genresLoadError = payload => ({
  type: GENRES_LOAD_ERROR,
  payload
});

const genreToggle = payload => ({
  type: GENRE_TOGGLE,
  payload
});

const getGenres = dispatch => {
  dispatch(genresLoading(true));

  const left = ({ message }) => dispatch(genresLoadError(message));

  const right = ({ data: { genres } }) => dispatch(genresLoadSuccess(genres));

  fetchGenres().fork(left, right);

  dispatch(genresLoading(false));
};

export {
  genresLoading,
  genresLoadSuccess,
  genresLoadError,
  genreToggle,
  getGenres
};
