import Jouke from "./components/Jouke";
import jokesData from "./jokesData";

function App() {
  const jokeElement = jokesData.map((joke) => {
    const { setup, punchline } = joke;
    return <Jouke setup={setup} punchline={punchline} />;
  });

  return <main>{jokeElement}</main>;
}
export default App;

// ===========================================================

// import Jouke from "./components/Jouke";

// function App() {
//   return (
//     <>
//       <Jouke
//         setup="I got my daughter a fridge for her birthday. "
//         punchline=" I can't wait to see her face light up when she opens it."
//       />
//       <Jouke
//         setup="How did the hacker escape the police?"
//         punchline="He just ransomware!"
//       />
//       <Jouke
//         setup="Why don't pirates travel on mountain roads? "
//         punchline=" Scurvy."
//       />
//       <Jouke
//         setup="Why do bees stay in the hive in the winter? "
//         punchline="Swarm"
//       />
//       <Jouke
//         setup="What's the best thing about Switzerland?"
//         punchline=" I don't know, but the flag is a big plus!
// "
//       />
//     </>
//   );
// }

// export default App;
