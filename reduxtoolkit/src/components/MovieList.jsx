import React from "react";
import { useSelector } from "react-redux";
import { removeMovie } from "../movieSlice";
import { useDispatch } from "react-redux";

export default function MovieList() {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  function handleRemoveMovie(id) {
    dispatch(removeMovie(id));
  }

  return (
    <div>
      {""}
      <h1>MovieList</h1>
      {movies.map((movie) => (
        <li key={movie.id}>
          {movie.title}
          <button onClick={() => handleRemoveMovie(movie.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
}
