import React from "react";

function TestState() {
  let [isImportant, setIsImportant] = React.useState("Yes");
  function handleClick() {
    setIsImportant("Definitely");
  }

  console.log(isImportant);

  return (
    <>
      <h1 style={{ color: "white" }}>Is state importan to know?</h1>
      <button onClick={handleClick}>{isImportant}</button>
    </>
  );
}

export default TestState;
