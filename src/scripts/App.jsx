import "./../styles/style.scss";
import React, { useEffect, useReducer } from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import InputSlider from "./components/InputSlider";
import GenreList from "./components/GenreList";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import { MovieContext } from "./context";
import initialState from "./reducers/initialState";
import reducer from "./reducers/index";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {}, []);

  return (
    <>
      <MovieContext.Provider value={{ state, dispatch }}>
        <Header />
        <InputSlider />
        <GenreList />
        <MovieList />
        <Footer />
      </MovieContext.Provider>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("movies"));
