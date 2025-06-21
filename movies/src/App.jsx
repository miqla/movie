import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MovieThumbnail } from "./components/movieThumbnail";

function App() {
  return (
    <>
      <main className="p-7">
        <p>Recommended for you</p>
        <div className="flex gap-2 mt-2">
          <MovieThumbnail />
          <MovieThumbnail />
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
