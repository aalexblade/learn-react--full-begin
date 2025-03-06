import ReactDOM from "react-dom/client";
import "./index.css";

import Images from "./components/Images";
import Counter from "./components/Counter";
import TestState from "./components/TestState";

function App() {
  return (
    <main className="container">
      {/* <Images /> */}
      <Counter />
      {/* <TestState /> */}
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
