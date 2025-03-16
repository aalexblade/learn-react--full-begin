import ReactDOM from "react-dom/client";
import "./index.css";

import Images from "./components/Images";
import Counter from "./components/Counter";
import TestState from "./components/TestState";
import TernaryOperator from "./components/TernaryOperator";
import TogglingState from "./components/TogglingState";
import ComplexStateObjects from "./components/ComplexStateObjects";
import FormsSignup from "./components/FormsSignup";
import FormTextariaChackBox from "./components/FormTextariaChackBox";
import FormObjectEntrise from "./components/FormObjectEntrise";

function App() {
  return (
    <main className="container">
      {/* <Images /> */}
      {/* <Counter /> */}
      {/* <TestState /> */}
      {/* <TernaryOperator /> */}
      {/* <TogglingState /> */}
      {/* <ComplexStateObjects /> */}
      {/* <FormsSignup /> */}
      {/* <FormTextariaChackBox /> */}
      <FormObjectEntrise />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
