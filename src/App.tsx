import { useState } from "react"
import Hangman from "./components/Hangman"
import Keyboard from "./components/Keyboard"
import Word from "./components/Word"
import words from "./words.json"
import "./App.css"

function App() {
  const [word, setWord] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  function guessLetter(letter: string) {
    if (guessedLetters.includes(letter)) {
      return
    }
    setGuessedLetters((prevLetters) => [...prevLetters, letter])
  }

  return (
    <main className="game">
      <p className="game__result">You won!</p>
      <Hangman />
      <Word word={word} guessedLetters={guessedLetters} />
      <Keyboard
        guessLetter={guessLetter}
        guessedLetters={guessedLetters}
        word={word}
      />
    </main>
  )
}

export default App
