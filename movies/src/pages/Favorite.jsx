import { useEffect, useState } from "react";
import { useNav } from "../components/UseNav";

export function Favorite() {
  const { nav, query } = useNav();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("MOVIE_TIME");
    if (data) {
      setMovies(JSON.parse(data));
    }
  }, []);

  return (
    <>
      {nav()}
      <main className="p-7 max-w-500 m-auto">
        {movies.length === 0 ? (
          <p>Anda belum memiliki film favorite</p>
        ) : (
          <h1>Your Favorites</h1>
        )}
        <div className="flex gap-2 my-2 overflow-auto pb-2">
          {movies.map((movie) => (
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
                {/* <button
                  onClick={() => addToFav(movie.id)}
                  className="btn btn-warning btn-xs"
                >
                  Favorite
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
