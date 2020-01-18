import Future from "fluture/index.js";

const fetchF = Future.encaseP(fetch);

const responseJSON = res => {
  if (res.ok) return Future.tryP(() => res.json());
};

export default function moviesNowPLaying(url) {
  return fetchF(url)
    .chain(responseJSON)
    .map(e => {
      console.log(1, e);
      return e;
    })
    .value(x => x);
}
