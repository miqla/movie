import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MovieThumbnail } from "./components/movieThumbnail";
import { moviesApi } from "./api/movies";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

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

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <main className="p-7">
        <p>Recommended for you</p>
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
        <p>Hot movies</p>
        <div className="flex gap-2 mt-2">
          <MovieThumbnail />
          <MovieThumbnail />
        </div>
      </main>
    </>
  );
}

export default App;
