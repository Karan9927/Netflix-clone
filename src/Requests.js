const key = ""; //Your key

const requests = {
  requestNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_networks=213`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${key}&language=en-US`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US`,
  requestActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
  requestComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
  requestUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
};

export default requests;
