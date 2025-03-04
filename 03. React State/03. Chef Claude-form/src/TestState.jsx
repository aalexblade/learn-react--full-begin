import React from "react";


function TestState() {

    const result = React.useState("Yes");

    console.log(result);
    


  return (
    <main>
      <h2 className="testStateTitle">Is state importan to know?</h2>
      <button>{result[0]}</button>
    </main>
  );
}

export default TestState;
