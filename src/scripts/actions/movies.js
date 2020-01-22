import {
  MOVIES_LOADING,
  MOVIES_LOAD_SUCCESS,
  MOVIES_LOAD_ERROR,
  MOVIES_RATING_UPDATE
} from "./constants";

import {
  fetchMovies
} from "../services/api";

const moviesLoading = payload => ({
  type: MOVIES_LOADING,
  payload
});

const moviesLoadSuccess = payload => ({
  type: MOVIES_LOAD_SUCCESS,
  payload
});

const moviesLoadError = payload => ({
  type: MOVIES_LOAD_ERROR,
  payload
});

const genreToggle = payload => ({
  type: MOVIES_RATING_UPDATE,
  payload
});

const getMovies = (dispatch) => {
  dispatch(moviesLoading(true));

  const left = ({
    message
  }) => dispatch(moviesLoadError(message))


  const right = ({
    data: {
      results
    }
  }) => dispatch(moviesLoadSuccess(results))

  fetchGenres()
    .fork(left, right)

  dispatch(moviesLoading(false));
};

export {
  moviesLoading,
  moviesLoadSuccess,
  moviesLoadError,
  moviesRatingUpdate,
  getMovies
};
