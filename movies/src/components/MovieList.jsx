import { useEffect, useState } from "react";
import { moviesApi } from "../api/movies";

export function MovieList({ sub_title, endpoint }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    setLoading(true);
    try {
      const { data } = await moviesApi({
        url: endpoint,
      });
      const { results } = await data;
      setMovies(results);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <p>{sub_title}</p>
      <div className="flex gap-2 my-2 overflow-auto pb-2">
        {loading && <p>Loading...</p>}
        {error && <p>Error!</p>}
        {!loading &&
          movies.map((movie) => (
            <div className="card bg-base-100 w-40 shadow-sm" key={movie.id}>
              <figure className="w-40">
                <img
                  className="object-cover object-center"
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                  alt={movie.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>
                <p>{movie.release_date}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
