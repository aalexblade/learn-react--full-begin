import React from "react";

function TogglingState() {
  const [isGoingOut, setIsGoingOut] = React.useState(false);

  function Toggle() {
    setIsGoingOut((prevState) => !prevState);
  }

  return (
    <>
      <h1>Do I file like gouing out tonight?</h1>
      <button
        onClick={Toggle}
        aria-label={`Current answer is ${
          isGoingOut ? "Yes" : "No"
        }. Click to change it.`}
      >
        {isGoingOut ? "Yes" : "No"}
      </button>
    </>
  );
}

// function TogglingState() {
//   const [isGoingOut, setIsGoingOut] = React.useState(false);

//   function chancheMing() {
//     setIsGoingOut((prevStae) => !prevStae);
//   }
//   console.log(isGoingOut);
//   return (
//     <>
//       <h1>Do I file like gouing out tonight?</h1>
//       <button
//         aria-label={`current answer is ${
//           isGoingOut ? "yes" : "no"
//         }. Click to change it.`}
//         onClick={chancheMing}
//       >
//         {isGoingOut ? "yes" : "no"}
//       </button>
//     </>
//   );
// }

export default TogglingState;
