import {
  GENRES_LOADING,
  GENRES_LOAD_SUCCESS,
  GENRES_LOAD_ERROR,
  GENRE_TOGGLE
} from "../actions/constants";
import initialState from "./initialState";

// const getMovieGenreIds = movies => {
//   const movieGenreIds = movies.reduce((genresIds, movie) => {
//     genresIds.push(...movie.genre_ids);
//     return genresIds;
//   }, []);
//   // returns unique movie genre ids
//   return Array.from(new Set(movieGenreIds));
// };

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GENRES_LOADING:
      return {
        ...state,
        loadingGenres: payload
      };
    case GENRES_LOAD_SUCCESS:
      return {
        ...state,
        genres: payload,
        loadingGenres: false
      };
    case GENRES_LOAD_ERROR:
      return {
        ...state,
        error: payload,
        loadingGenres: false
      };
    case MOVIES_FETCH_SUCCESS:
      return {
        ...state,
        selected: getMovieGenreIds(payload)
      };
    case GENRE_TOGGLE:
      let selected;
      const currentlySelected = state.selected.indexOf(payload) !== -1;

      if (currentlySelected) {
        selected = state.selected.filter(id => id !== payload);
      } else {
        selected = [...state.selected, payload];
      }

      return {
        ...state,
        selected
      };
    default:
      return state;
  }
};
