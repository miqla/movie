import axios from "axios";

export const firstApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/discover/movie?api_key=8c66f744dd4d629caa07e3ee4c01847d",
});

export const nowPlaying = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}&api_key=8c66f744dd4d629caa07e3ee4c01847d",
});

export const moviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzY2Zjc0NGRkNGQ2MjljYWEwN2UzZWU0YzAxODQ3ZCIsIm5iZiI6MTc1MDUxNzM4Ny42NCwic3ViIjoiNjg1NmM2OGIzZGM0MDFjZDFmZWM1OTYzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.j-VuY5M6oH6BxqdpZQR_a-B-oiafX9v4rpCpqWHpuYM",
  },
});
