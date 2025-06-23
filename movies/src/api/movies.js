import axios from "axios";

export const moviesApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/discover/movie?api_key=8c66f744dd4d629caa07e3ee4c01847d",
});

export const nowPlaying = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}&api_key=8c66f744dd4d629caa07e3ee4c01847d",
});

export const queryMovies = (dynamicURL) => {
  const customURL = axios.create({
    baseURL:
      "https://api.themoviedb.org/3/search/movie?query=" +
      dynamicURL +
      "&include_adult=false&language=en-US&page=1&api_key=8c66f744dd4d629caa07e3ee4c01847d",
  });
  return customURL;
};
