import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MovieThumbnail } from "./components/movieThumbnail";

function App() {
  return (
    <>
      <main>
        <p>Recommended for you</p>
        <div className="flex gap-2">
          <MovieThumbnail />
          <MovieThumbnail />
        </div>
      </main>
    </>
  );
}

export default App;
