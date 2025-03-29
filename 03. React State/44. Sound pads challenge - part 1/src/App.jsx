import React from "react";
import padsData from "./pads";

export default function App({ darkMode }) {
  const [pads, setPads] = React.useState(padsData);

  const styles = {
    backgroundColor: darkMode ? "#222222" : "#cccccc",
    color: pads.on ? "on" : "off",
  };

  const buttonEl = pads.map((pad) => (
    <button style={styles} key={pad.color}></button>
  ));

  return (
    <main>
      <div className="pad-container">{buttonEl}</div>
    </main>
  );
}
