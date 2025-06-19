import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <main className="flex">
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add Count</button>
      </main>
    </>
  );
}

export default App;
