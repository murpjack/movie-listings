export default function getPresentGenres(moviesArr) {
  // genres: [[],[],[],...]
  // Build a list of all genre_ids in each genre[] using spread operators
  const listAllGenres = (total, genreList) => [...total, ...genreList];
  // Get only unique ids
  const removeDuplicates = (genreId, idx, list) =>
    list.indexOf(genreId) === idx;

  return moviesArr.reduce(listAllGenres, []).filter(removeDuplicates);
}
