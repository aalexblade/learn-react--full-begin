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
    <div key={thing}>
      {thing}
    </div>
  ));
  console.log(thingsElements);

  function addFavoriteThing() {
    setMyFavoriteThings((prevFaveThings) => [
      ...prevFaveThings,
      allFavoriteThings[prevFaveThings.leng],
    ]);
  }

  return (
    <>
      <button onClick={addFavoriteThing}>Add item</button>
      <div style={{backgroundColor:"tomato"}} aria-live="polite">{thingsElements}</div>
    </>
  );
}

export default ComplexStateObjects;
