import { useState } from "react";
import { languages } from "./languages";

export default function AssemblyEndgame() {
  const [currentWorld, setCurrentWorld] = useState("react");

  const [guessedLetters, setGuessedLetters] = useState([]);

  console.log(guessedLetters);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function addGiessedLetters(letter) {
    setGuessedLetters((prevLetters) => [...prevLetters, letter]);
  }

  const lnguageElement = languages.map((lang) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    return (
      <span className="chip" style={styles} key={lang.name}>
        {lang.name}
      </span>
    );
  });

  const letterElements = currentWorld
    .split("")
    .map((letter, index) => <span key={index}>{letter.toUpperCase()}</span>);

  const keyboarElements = alphabet.split("").map((letter) => (
    <button 
    key={letter} 
    onClick={() => addGiessedLetters(letter)}
    >
      {letter.toLocaleUpperCase()}
    </button>
  ));

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className="language-chips">{lnguageElement}</section>
      <section className="world">{letterElements}</section>
      <section className="keyboard">{keyboarElements}</section>
    </main>
  );
}
