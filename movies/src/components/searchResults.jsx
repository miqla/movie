import { useEffect, useState } from "react";
import { moviesApi } from "../api/movies";

export function SearchResult({ sub_title, input_value }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [find, setFind] = useState([]);

  async function fetchData(input_value) {
    setLoading(true);
    try {
      const { data } = await moviesApi({
        url: "/search/movie",
        params: {
          query: input_value,
        },
      });
      const { results } = await data;
      setFind(results);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  //   use debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchData(input_value);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [input_value]);

  return (
    <>
      {find.length > 0 && <p>{sub_title}</p>}
      <div className="flex gap-2 my-2 overflow-auto pb-2">
        {loading && <p>Loading...</p>}
        {error && <p>Error!</p>}
        {!loading &&
          find.map((movie) => (
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
