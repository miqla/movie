import axios from "axios";

export const moviesApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/discover/movie?api_key=8c66f744dd4d629caa07e3ee4c01847d",
});
