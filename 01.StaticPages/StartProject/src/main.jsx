// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

import "./index.css";

// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

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

// ====================================================

// const root = createRoot(document.getElementById("root"));

// function MyAwesomeNavbar() {
//   return (
//     <nav
//       className="navbar navbar-expand-sm navbar-dark bg-dark"
//       aria-label="Third navbar example"
//     >
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           MyAwesomeNavbar
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarsExample03"
//           aria-controls="navbarsExample03"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarsExample03">
//           <ul className="navbar-nav me-auto mb-2 mb-sm-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Link
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link disabled" aria-disabled="true">
//                 Disabled
//               </a>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Dropdown
//               </a>
//               <ul className="dropdown-menu">
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Action
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Another action
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Something else here
//                   </a>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//           <form role="search">
//             <input
//               className="form-control"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

/**
 * Challenge:
 * Create your very first custom React component!
 * Call it "MainContent", and have it return a simple
 * h1 element that says "React is great!"
 *
 * Afterward, render it on the line below MyAwesomeNavbar
 */

// function MainContent(){
//   return <h1>Hello react!</h1>
// }

// root.render(
//   <>
//     <MyAwesomeNavbar />
//   <MainContent/>
//   </>
// );
// ===============================================================

// Imperative code

// const h1 = document.createElement("h1");
// h1.textContent = "This is my first element from React!";
// h1.className = "header";
// document.getElementById("root").appendChild(h1);

// ==================================================================

// Declarative

// createRoot(document.getElementById("root")).render(
//   <h1 className="header">Hello my first element from React!</h1>
// );

// ==================================================================

// COMPONENTS

// import { createRoot } from "react-dom/client";

// const root = createRoot(document.getElementById("root"));

// function Page() {
//   return (
//     <div>
//       <header>
//         <img src="/src/assets/react.svg" alt="React logo" width="40" />
//       </header>

//       <main>
//         <h1>Reasons I'm excited to learn React</h1>
//         <ol>
//           <li>one</li>
//           <li>two</li>
//           <li>three</li>
//         </ol>
//       </main>
//       <footer>© 2025 Blade development. All rights reserved.</footer>
//     </div>
//   );
// }

// root.render(<Page />);
// ==================================================================

//  costum FRAGMENT and STYLE parent/children

// import { createRoot } from "react-dom/client";

// const root = createRoot(document.getElementById("root"));

// function Header() {
//   return (
//     <header className="header">

//       <img
//         className="nav-logo"
//         src="/src/assets/react-logo.png"
//         alt="React logo"
//       />

//       <nav>
//         <ul className="nav-list">
//           <li className="nav-list-item">Pricing</li>
//           <li className="nav-list-item">About</li>
//           <li className="nav-list-item">Contact</li>
//         </ul>
//       </nav>

//     </header>
//   );
// }

// function Main() {
//   return (
//     <main>
//       <h1>Reasons I'm excited to learn React</h1>
//       <ol>
//         <li>
//           React is a popular library, so I will be able to fit in with all the
//           coolest devs out there! 😎
//         </li>
//         <li>
//           I am more likely to get a job as a front end developer if I know React
//         </li>
//       </ol>
//     </main>
//   );
// }

// function Footer() {
//   return <footer>© 2025 Blade development. All rights reserved.</footer>;
// }

// root.render(
//   <>
//     <Header />
//     <Main />
//     <Footer />
//   </>
// );

// =========================================================================
// LESSON 19: Organizing Components

import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import MainPages from "./components/MainPages";
import Footer from "./components/Footer";

const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <>
      <Header />
      <MainPages />
      <Footer />
    </>
  );
}

root.render(<Page />);
