import { useState } from "react";
import RomanInteger from "./components/RomanInteger/RomanInteger";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-green-500">leetcode</h1>
      <RomanInteger />
    </div>
  );
}

export default App;
