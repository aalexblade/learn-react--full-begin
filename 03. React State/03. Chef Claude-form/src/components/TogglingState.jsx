import React from "react";

function TogglingState() {
  const [click, setClick] = React.useState(false);

  function hadleToggleClick() {
    setClick((prevClick) => (prevClick === "yes" ? "no" : "yes"));
    console.log(click);
  }

  //     let click = "true";

  //   function hadleClick() {
  //     console.log(click ? "false" : "true" );
  //     console.log(!click? "true" : "false")
  //   }

  return (
    <>
      <h1>Do I file like gouing out tonight?</h1>
      <button onClick={hadleToggleClick}>{click}</button>
    </>
  );
}

export default TogglingState;
