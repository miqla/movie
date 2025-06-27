import { MovieList } from "../components/MovieList";
import { SearchResult } from "../components/SearchResults";
import { useNav } from "../components/UseNav";

export function Movie() {
  const { nav, query } = useNav();

  return (
    <>
      {nav()}
      <main className="p-7 max-w-500 m-auto">
        <SearchResult sub_title="Searching Results" input_value={query} />
        <MovieList sub_title="Hot Movies" endpoint="/movie/popular" />
        <MovieList sub_title="Now Playing" endpoint="/movie/now_playing" />
      </main>
    </>
  );
}
