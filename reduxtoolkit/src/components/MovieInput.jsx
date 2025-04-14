import { useState } from "react";
import { addMovie } from "../movieSlice";
import { useDispatch } from "react-redux";

export default function MovieInput() {
  const [newMovie, setNewMovie] = useState("");

  const dispatch = useDispatch();

  function addNewMovie() {
    if (newMovie) {
      dispatch(addMovie(newMovie));
      setNewMovie("");
    }
  }

  return (
    <>
      <input onChange={(e) => setNewMovie(e.target.value)} value={newMovie} />
      <button onClick={addNewMovie}>Add Movie</button>
    </>
  );
}
