import { useEffect, useState } from "react";
import { moviesApi } from "../api/movies";

export function MovieList({ sub_title, endpoint, input_value }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  //   favorite film
  const favs = [];
  function getMovie(id) {
    for (const movie of movies) {
      if (movie.id === id) {
        return movie;
      }
    }
    return null;
  }

  function addToFav(id) {
    const movieTarget = getMovie(id);
    if (favs.some((fav) => fav.id === movieTarget.id)) {
      return;
    } else {
      favs.push(movieTarget);
    }
    saveData();
  }

  //   access local storage
  const STORAGE_KEY = "MOVIE_TIME";
  function saveData() {
    if (isStorageExist()) {
      const parsed = JSON.stringify(favs);
      localStorage.setItem(STORAGE_KEY, parsed);
    }
  }

  function isStorageExist() {
    if (typeof Storage === undefined) {
      alert("Browser kamu tidak mendukung local storage");
      return false;
    }
    return true;
  }

  function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(serializedData);

    //   kalau sudah ada data di storage, maka tambahkan
    if (data !== null) {
      for (const film of data) {
        favs.push(film);
      }
    }
  }

  if (isStorageExist()) {
    loadDataFromStorage();
  }
  // end fav

  async function fetchMovies(input_value) {
    setLoading(true);
    try {
      const { data } = await moviesApi({
        url: endpoint,
        params: {
          query: input_value,
        },
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

  //   use debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchMovies(input_value);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [input_value]);

  return (
    <>
      {movies.length > 0 && <p>{sub_title}</p>}
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
                <button
                  onClick={() => addToFav(movie.id)}
                  className="btn btn-warning btn-xs"
                >
                  Favorite
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
