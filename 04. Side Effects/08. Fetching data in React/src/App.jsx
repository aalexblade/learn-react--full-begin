import React from "react";

export default function App(props) {
  const [starWarsData, setStarWarsData] = React.useState(null);

  fetch("https://swapi.info/api/people/1")
    .then((res) => res.json())
    .then((data) => setStarWarsData(data));

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
