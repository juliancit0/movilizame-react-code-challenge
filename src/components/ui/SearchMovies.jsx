/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { useForm } from 'react-hook-form';
import getMovies from '../../services/movies';

export default function SearchMovies() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(await getMovies(data.movieName, data.releaseDate));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('movieName')} />
      <input {...register('releaseDate')} />
      <input type="submit" />
    </form>
  );
}
