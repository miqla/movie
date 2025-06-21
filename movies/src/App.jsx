import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MovieThumbnail } from "./components/movieThumbnail";
import { moviesApi, nowPlaying } from "./api/movies";
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
      <main className="p-7">
        <p>Hot Movies</p>
        <div className="flex gap-2 mt-2">
          {loading && <p>Loading...</p>}
          {error && <p>Error!</p>}
          {console.log(movies)}
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
        <div className="flex gap-2 mt-2">
          {loading && <p>Loading...</p>}
          {error && <p>Error!</p>}
          {console.log(popular)}
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
