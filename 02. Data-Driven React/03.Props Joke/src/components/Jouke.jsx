// 2================add Conditional rendering

import React from "react";

function Jouke({ setup, punchline }) {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }

  console.log(isShown);

  return (
    <>
      {setup && <h3 className="setup"> Setup: {setup} </h3>}
      {isShown && <p>Punchline: {punchline}</p>}
      <button onClick={toggleShown}>Shown punchline</button>
      <hr />
    </>
  );
}

export default Jouke;

// 1==============================
// function Jouke({ setup, punchline }) {
//   return (
//     <>
//     {setup &&  <p className="setup"> Setup: {setup} </p>}
//       <p className="punchline"> Punchline: {punchline}</p>
//       <hr />
//     </>
//   );
// }
