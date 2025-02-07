import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// const div = createRoot.createElement("div", {
//   name: "main",
//   id: "test-Id",
//   className: "test-class",
//   children: ["helo", "", "react", "", "from", "UA"],
// });

// console.log(div);

// ===================================================
//One--example
// import { createRoot } from "react-dom/client";

// const root = createRoot(document.getElementById('root'))
// root.render(<h1>Hello! React.</h1>)

// ==================================================
//Two--example
// import { createRoot } from "react-dom/client";

// createRoot(document.getElementById("root")).render(
//   <ul>
//     <li>first. I am a beginer and want to lern React</li>
//     <li>seond. I love Reack</li>
//     <li>third. I like how you teach </li>
//   </ul>
// );
