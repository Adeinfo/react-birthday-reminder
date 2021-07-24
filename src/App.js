import "./App.css";
import Birthday from "./Birthday";
import data from "./Data";
import { useState } from "react";

function App() {
  const [people, setData] = useState(data);
  return (
    <div className="app">
      <div className="container">
        <h1>{data.length} Birthdays Today</h1>
        <Birthday props={people} />
        <button className="btn" type="submit" onClick={() => setData([])}>
          Clear all
        </button>
      </div>
    </div>
  );
}

export default App;
