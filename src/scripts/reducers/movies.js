import {
  MOVIES_LOADING,
  MOVIES_LOAD_SUCCESS,
  MOVIES_LOAD_ERROR,
  MOVIES_RATING_UPDATE
} from "../actions/constants";

import initialState from "./initialState";

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case MOVIES_LOADING:
      return {
        ...state,
        loading: payload
      };
    case MOVIES_LOAD_SUCCESS:
      return {
        ...state,
        movies: payload,
        loading: false
      };
    case MOVIES_LOAD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case MOVIES_RATING_UPDATE:
      return {
        ...state,
        ratingsFilter: payload
      };
    default:
      return state;
  }
};
