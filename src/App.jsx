import { useState } from "react";
import RomanToInteger from "./components/RomanToInteger/RomanToInteger";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-green-500">leetcode</h1>
      <RomanToInteger />
    </div>
  );
}

export default App;
