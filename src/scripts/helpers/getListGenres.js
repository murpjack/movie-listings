import Future from "fluture/index.js";
import { API_KEY_VALUE } from "./variables";

const URL_GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY_VALUE}`;

const fetchF = Future.encaseP(fetch);

const responseJSON = res => {
  if (res.ok) return Future.tryP(() => res.json());
};

export const getListGenres = fetchF(URL_GENRES)
  .chain(responseJSON)
  .map(res => res.genres);
export default getListGenres;
