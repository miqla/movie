import "./App.css";
import { MovieThumbnail } from "./components/movieThumbnail";
import { moviesApi, nowPlaying, queryMovies } from "./api/movies";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);

  async function fetchMovies() {
    setLoading(true);
    try {
      const { data } = await moviesApi.get();
      const { results } = await data;
      setMovies(results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchPopular() {
    setLoading(true);
    try {
      const { data } = await nowPlaying.get();
      const { results } = await data;
      setPopular(results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
    fetchPopular();
  }, []);

  return (
    <>
      <nav className="flex bg-amber-100">
        <h2>Movie Time</h2>
        <form className="flex p-2 text-gray-200 border-gray-200 rounded-md w-1/2">
          <input
            className="w-full bg-blue-300"
            type="search"
            placeholder="Masukkan film yang anda cari..."
          />
          {/* <ul class="suggestions visible">
          <!-- <li>Toronto</li> -->
        </ul> */}
          <button type="submit"></button>
        </form>
      </nav>
      <main className="p-7">
        <p>Hot Movies</p>
        <div className="flex gap-2 my-2 overflow-auto pb-2">
          {loading && <p>Loading...</p>}
          {error && <p>Error!</p>}
          {!loading &&
            movies.map((movie) => (
              <MovieThumbnail
                key={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}
              />
            ))}
        </div>
        <p>Now Playing</p>
        <div className="flex gap-2 my-2 overflow-auto pb-2">
          {loading && <p>Loading...</p>}
          {error && <p>Error!</p>}
          {!loading &&
            popular.map((movie) => (
              <MovieThumbnail
                key={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}
              />
            ))}
        </div>
      </main>
    </>
  );
}

export default App;
