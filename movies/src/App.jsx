import "./App.css";
import { useState } from "react";
import { SearchResult } from "./components/SearchResults";
import { MovieList } from "./components/movieList";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <nav className="flex bg-amber-100 justify-around items-center">
        <h2>movieTime</h2>
        <form className="flex p-2 text-gray-200 border-gray-200 rounded-md w-1/2">
          <input
            value={query}
            className="w-full bg-blue-300 m-0 py-2 px-8 text-sm border-transparent rounded-sm"
            type="search"
            placeholder="Masukkan film yang anda cari..."
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button
            className="m-0 p-0 border-transparent w-40 rounded-sm cursor-pointer opacity-70 bg-green-300 bg-[url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E)]"
            type="submit"
          ></button>
        </form>
        <ul className="flex gap-5">
          <li>Movies</li>
          <li>TV Shows</li>
        </ul>
      </nav>
      <main className="p-7">
        <SearchResult sub_title="Searching Results" input_value={query} />
        <MovieList sub_title="Hot Movies" endpoint="/movie/popular" />
        <MovieList sub_title="Now Playing" endpoint="/movie/now_playing" />
      </main>
    </>
  );
}

export default App;
