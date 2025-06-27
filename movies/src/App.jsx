import "./App.css";
import { Movie } from "./pages/Movie";
import { Favorite } from "./pages/Favorite";
import { Routes, Route, HashRouter } from "react-router";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
