import "./App.css";
import { useState } from "react";
import { SearchResult } from "./components/SearchResults";
import { MovieList } from "./components/movieList";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <nav className=" bg-amber-100">
        <div className="nav-container flex justify-around items-center p-2 max-w-500 m-auto">
          <h2
            style={{
              fontFamily: "satisfy, cursive",
              fontSize: "25px",
              color: "SandyBrown",
              textShadow: "0.02em 0.02em 0 Brown, 0 0 0.5em violet",
            }}
          >
            movieTime
          </h2>
          <form
            style={{
              color: "#555",
              display: "flex",
              padding: "2px",
              border: "1px solid currentColor",
              borderRadius: "5px",
              position: "relative",
            }}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              value={query}
              style={{
                width: "300px",
                background: "transparent",
                margin: "0",
                padding: "7px 8px",
                fontSize: "14px",
                color: "inherit",
                border: "1px solid transparent",
                borderRadius: "inherit",
              }}
              type="search"
              placeholder="Masukkan film yang anda cari..."
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button
              style={{
                width: "40px",
                padding: "0",
                margin: "0",
                border: "1px solid transparent",
                borderRadius: "inherit",
                background: "transparent no-repeat center",
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\")",
                cursor: "pointer",
                opacity: "0.7",
              }}
              type="submit"
            ></button>
          </form>
          <ul className="flex gap-5">
            <li>Movies</li>
            <li>Favorites</li>
          </ul>
        </div>
      </nav>

      <main className="p-7 max-w-500 m-auto">
        <SearchResult sub_title="Searching Results" input_value={query} />
        <MovieList sub_title="Hot Movies" endpoint="/movie/popular" />
        <MovieList sub_title="Now Playing" endpoint="/movie/now_playing" />
      </main>
    </>
  );
}

export default App;
