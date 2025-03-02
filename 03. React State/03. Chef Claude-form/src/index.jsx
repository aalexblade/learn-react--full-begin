import ReactDOM from "react-dom/client";
import "./index.css";

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
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
