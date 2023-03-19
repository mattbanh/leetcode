import { useState } from "react";
import RomanInteger from "./components/RomanInteger/RomanInteger";
import LeetCode75 from "./solutions/LeetCode75";
import OtherSolutions from "./solutions/OtherSolutions";

// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-16">
      <h1 className="text-green-500 ">leetcode</h1>
      <p className="mb-8 text-xs">A project by Matt Ishii (Banh)</p>
      {/* <RomanInteger /> */}
      <LeetCode75 />
      {/* <OtherSolutions /> */}
    </div>
  );
}

export default App;
