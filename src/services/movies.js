// b7d4916d0799dfce932437fe9f242f2c
// REVIEW: Esta es la API key de movie database
// ENDPOINTS: https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=<<titulo>>&page=1&include_adult=false
// DOCUMENTACIÓN: https://developers.themoviedb.org/3/search/search-movies
// TODO: Implementar llamada a la API usando fetch

const getMovies = async (title, year) => {
  const apiKey = 'b7d4916d0799dfce932437fe9f242f2c';
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${title}&page=1&include_adult=false`);
    const data = await response.json();
    return data.results.filter((movie) => movie.release_date > year);
  } catch (error) {
    return error;
  }
};

export default getMovies;
