import axios from "axios";

export const moviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzY2Zjc0NGRkNGQ2MjljYWEwN2UzZWU0YzAxODQ3ZCIsIm5iZiI6MTc1MDUxNzM4Ny42NCwic3ViIjoiNjg1NmM2OGIzZGM0MDFjZDFmZWM1OTYzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.j-VuY5M6oH6BxqdpZQR_a-B-oiafX9v4rpCpqWHpuYM",
  },
});
