import React from "react";
import padsData from "./pads";
import Pad from "./Pad";

export default function App({darkMode}) {
  const [pads, setPads] = React.useState(padsData);

 const styles={
  backgroundColor: darkMode ? "#c5bebe" : "#21eb3f"
 }
 
//     const styles = {
  //     backgroundColor: darkMode ? "#222222" : "#cccccc",
  //     color: pads.on ? "on" : "off",
  //   };
 
  const buttonEl = pads.map((pad) => (
    <button key={pad.id} style={styles} ></button>
  ));

  return (
    <main>
      <div className="pad-container">{buttonEl}</div>
    </main>
  );
}

// =====================================3

// export default function App() {
//   const [pads, setPads] = React.useState(padsData);

//   const buttonEl = pads.map((pad) => (
//   <Pad key={pad.id} color={pad.color} on={pad.on}/>
// ));

//   return (
//     <main>
//       <div className="pad-container">{}</div>
//     </main>
//   );
// }

// =====================================1

// export default function App({ darkMode }) {
//   const [pads, setPads] = React.useState(padsData);

//   const styles = {
//     backgroundColor: darkMode ? "#222222" : "#cccccc",
//     color: pads.on ? "on" : "off",
//   };

//   const buttonEl = pads.map((pad) => (
//     <button style={styles} key={pad.color}></button>
//   ));

//   return (
//     <main>
//       <div className="pad-container">{buttonEl}</div>
//     </main>
//   );
// }
