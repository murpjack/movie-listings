import combineReducers from "react-combine-reducers";
import genres from "./genres";
import movies from "./movies";

export const reducer = combineReducers({ movies, genres });
console.log(1, reducer, genres, movies);
export default reducer;
