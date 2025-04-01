import React from "react";

function Pad(props) {
  const [on, setOn] = React.useState(props.on);

  function toggleClick() {
    setOn((prevOn) => !prevOn);
  }

  return (
    <button
      onClick={toggleClick}
      style={{ backgroundColor: props.color }}
      className={on ? "on" : undefined}
    ></button>
  );
}

export default Pad;

// ========================================================1
// function Pad(props) {

//   console.log(props.on)

//   return (
//     <button
//       style={{ backgroundColor: props.color }}
//       className={props.on ? "on" : null}
//     ></button>
//   );
// }

// export default Pad;
