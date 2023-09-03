const key = process.env.REACT_APP_FRONTEND_API_KEY;

const requests = {
  requestPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestPopularTV: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${key}`,
};

export default requests;
