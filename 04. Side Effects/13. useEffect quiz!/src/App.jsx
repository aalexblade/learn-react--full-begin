import { useState, useEffect } from "react";

export default function App() {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://swapi.info/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  return (
    <div>
      <h2>The counter is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Get nex character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
