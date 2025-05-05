import React from "react";
import Die from "./components/Die";

function App() {
  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }

  const [dice, setDice] = React.useState(generateAllNewDice);

  function rollDice() {
    setDice(generateAllNewDice());
  }

  const diceElement = dice.map((num, index) => <Die key={index} value={num} />);

  return (
    <main>
      <div className="dice-container">
        {diceElement}
      </div>

        <button className="dice-roll" onClick={rollDice}>
        🎲 Roll Dice
        </button>
    </main>
  );
}

export default App;
