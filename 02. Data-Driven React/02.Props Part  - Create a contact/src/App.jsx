import Contact from "./components/Contact";

function App() {
  return (
    <div className="contacts">
       <Contact
                img="./images/mr-whiskerson.png"
                name="Mr. Whiskerson"
            />
      <Contact />
      <Contact />
      <Contact />
    </div>
  );
}

export default App;
