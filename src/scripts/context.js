import React from "react";
import initialState from "./reducers/initialState";

export const MovieContext = React.createContext(initialState);
export default MovieContext;
