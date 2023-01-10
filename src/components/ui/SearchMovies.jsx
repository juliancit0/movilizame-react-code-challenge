import * as React from 'react';
import getMovies from '../../services/movies';

const onSubmit = async (event) => {
  event.preventDefault();
  const movieList = await getMovies('messi', '2017');
  console.log(movieList);
};

export default function SearchMovies() {
  return (
    <form onSubmit={onSubmit}>
      <label
        htmlFor="movie"
      >
        Movie
        <input type="text" name="movie" />
      </label>
      <input type="submit" value="Submit" />

    </form>
  );
}
