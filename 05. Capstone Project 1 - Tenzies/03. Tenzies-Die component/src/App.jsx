import Die from "./components/Die";

 function App() {
  function generateAllNewDice() {
      const newDice = []
      for (let i = 0; i < 10; i++) {
          const randomNumber = Math.ceil(Math.random() * 6) // 1–6
          newDice.push(randomNumber)
      }
      console.log(newDice)
      return newDice
  }

  const diceArray = generateAllNewDice()

  return (
      <main>
          <div className="dice-container">
              {diceArray.map((num, index) => (
                  <Die key={index} value={num} />
              ))}
          </div>
      </main>
  )
}

export default App;
