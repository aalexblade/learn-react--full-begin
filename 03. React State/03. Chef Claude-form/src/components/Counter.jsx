import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  function minus() {
    setCount((prevCount) => prevCount - 1);
  }

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={minus} aria-label="Decrease count">
        -
      </button>
      <span>{count}</span>
      <button onClick={add} aria-label="Increment count">
        +
      </button>
    </>
  );
}

// function Counter() {
//   const [count, setCount] = React.useState(0);

//   function subtract() {
//     setCount(count - 1);
//   }

//   function add() {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <button onClick={subtract}>-</button>
//       <span>{count}</span>
//       <button onClick={add}>+</button>
//     </>
//   );
// }

// =================================================================
// function Counter({ step = 1 }) {
//   const [count, setCount] = React.useState(0);

//   function handleIncrement() {
//     setCount((prevCount) => prevCount + step);
//   }
//   function handleDecrement() {
//     setCount((prevCount) => prevCount - step);
//   }

//   return (
//     <>
//       <h1>Haw many times will Bob say "state" in this section?</h1>
//       <div>
//         <button onClick={handleDecrement} aria-label="Decrease count">
//           -
//         </button>
//         <h2 style={{ color: "#fff", fontSize: "24px" }}>{count}</h2>
//         <button onClick={handleIncrement} aria-label="Increase count">
//           +
//         </button>
//       </div>
//     </>
//   );
// }
// ===================================================================
// function Counter({ step = 1 }) {
//   const [count, setCount] = useState(0);

//   function handleIncrement() {
//     setCount((prevCount) => prevCount + step);
//   }

//   function handleDecrement() {
//     setCount((prevCount) => prevCount - step);
//   }

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Counter</h2>
//       <div style={styles.counterBox}>
//         <button style={styles.button} onClick={handleDecrement}>−</button>
//         <span style={styles.count}>{count}</span>
//         <button style={styles.button} onClick={handleIncrement}>+</button>
//       </div>
//       <p style={styles.stepText}>Step: {step}</p>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "50vh",

//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "#002",
//     borderRadius: "15px"
//   },
//   title: {
//     fontSize: "28px",
//     marginBottom: "10px",
//     color: "#fff",
//   },
//   counterBox: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#fff",
//     padding: "15px 20px",
//     borderRadius: "10px",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//   },
//   count: {
//     fontSize: "36px",
//     fontWeight: "bold",
//     margin: "0 15px",
//     minWidth: "60px",
//     textAlign: "center",
//     transition: "0.2s ease-in-out",
//   },
//   button: {
//     padding: "12px 18px",
//     fontSize: "24px",
//     cursor: "pointer",
//     border: "none",
//     borderRadius: "5px",
//     backgroundColor: "#007bff",
//     color: "white",
//     transition: "0.2s",
//     outline: "none",
//   },
//   stepText: {
//     marginTop: "10px",
//     fontSize: "16px",
//     color: "#555",
//   },
// };

export default Counter;
