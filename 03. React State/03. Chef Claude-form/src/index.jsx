import ReactDOM from "react-dom/client";
import "./index.css";

import Counter from "./counter";
import TestState from "./TestState";

function App() {
  function handleClick() {
    console.log("I was clicked!");
  }

  function HandleMouseOver() {
    console.log("HandleMouseOver!");
  }

  return (
    <main className="container">
      <img
        onMouseOver={HandleMouseOver}
        src="http://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
      />
      <button onClick={handleClick}>Click me</button>

      <footer>
        <Counter />
        <TestState/>
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
