import Future from "fluture/index.js";
import { API_KEY_VALUE, BASE_URL } from "./variables";

const url = `${BASE_URL}/movie/550?api_key=${API_KEY_VALUE}`;

const fetchF = Future.encaseP(fetch);
const responseJSON = res => {
  if (res.ok) return Future.tryP(() => res.json());
};

export default function movieData() {
  return fetchF(url).chain(responseJSON);
}
