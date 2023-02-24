import { useState } from "react"

function Word() {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([
    "T",
    "E",
    "S",
    "T",
  ])
  return (
    <div>
      {guessedLetters.map((letter) => (
        <span className="word__letter">{letter}</span>
      ))}
    </div>
  )
}

export default Word
