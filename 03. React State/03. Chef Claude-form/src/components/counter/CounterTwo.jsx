import React from "react";

import CounterNum from "./CounterNum";

function CounterTwo() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  /**
   * Challenge:
   * - Create a new component called `Count`
   *    - It should receive a prop called `number`, whose value
   *      is the current value of our count
   *    - Have the component render the h2.count element below
   *      and display the incoming prop `number`
   * - Replace the h2.count below with an instance of
   *   the new Count component, passing the correct value
   *   to its `number` prop.
   * - After doing this, everything should be working the
   *   same as before.
   */

  return (
    <>
      <div className="counter">
        <button
          className="minus"
          onClick={subtract}
          aria-label="Decrease count"
        >
          -
        </button>

        <CounterNum number={count} />

        <button className="plus" onClick={add} aria-label="Increase count">
          +
        </button>
      </div>
    </>
  );
}
export default CounterTwo;

// import CounterLogic from "./CounterLogic";

// function CounterTwo() {
//   const [count, setCount] = React.useState(0);

//   function add() {
//     setCount((prevCount) => prevCount + 1);
//     console.log(count);
//   }

//   function subtract() {
//     setCount((prevCount) => prevCount - 1);
//     console.log(count);
//   }

//   return (
//     <>
//       <button className="minus" onClick={subtract} aria-label="Decrease count">
//         -
//       </button>

//       <CounterLogic />

//       <button className="plus" onClick={add} aria-label="Increase count">
//         +
//       </button>
//     </>
//   );
// }
