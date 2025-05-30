import { useState, useEffect } from "react";

export default function App() {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount]=useState(0)

  console.log("render")

  useEffect(() => {

    console.log("Effect fn ran")
    fetch("https://swapi.info/api/people/1")
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, []);

  return (
    <div>
      <h1>The counter {count}</h1>
      <button onClick={()=>setCount(prevCount=>prevCount+1)}>Add</button>
    <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
