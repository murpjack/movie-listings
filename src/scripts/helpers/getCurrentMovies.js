import Future from "fluture/index.js";
import { API_KEY_VALUE } from "./variables";

const fetchF = Future.encaseP(fetch);

const responseJSON = res => {
  if (res.ok) return Future.tryP(() => res.json());
};

function sortMoviesByPopularity({ results }) {
  return Array.from(results).sort((a, b) => {
    return a.popularity > b.popularity ? -1 : 1;
  });
}

function findENLangMovies(movies) {
  return movies.filter(movie => movie.original_language === "en");
}

const setMovieData = movies => {
  return movies.map(movie => {
    return {
      genres: movie.genre_ids,
      popularity: movie.popularity,
      poster: `https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`,
      rating: movie.vote_average,
      title: movie.original_title
    };
  });
};

export const URL_SHOWING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY_VALUE}&region=GB`;
export const getCurrentMovies = fetchF(URL_SHOWING)
  .chain(responseJSON)
  .map(sortMoviesByPopularity)
  .map(findENLangMovies)
  .map(r => {
    console.log(4, r);
    return r;
  })
  .map(setMovieData);

export default getCurrentMovies;
