import React from "react";

function ComplexStateObjects() {

  const [myFavoriteThings, setMyFavoriteThings] = React.useState([]);

  const allFavoriteThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔",
    "🛷🔔",
    "🥩🍝",
  ];
  const thingsElements = myFavoriteThings.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  function addFavoriteThing() {
    setMyFavoriteThings((prevThing) => [
      ...prevThing,
      allFavoriteThings[prevThing.length],
    ]);
  }

  return (
    <>
      <button onClick={addFavoriteThing}>Add item</button>
      <div style={{ color: "white" }} aria-live="polite">
        {thingsElements}
      </div>
    </>
  );
}

export default ComplexStateObjects;
