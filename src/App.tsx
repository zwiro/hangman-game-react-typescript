import { useEffect, useState } from "react"
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
  const [isGameOver, setIsGameOver] = useState(false)

  function guessLetter(letter: string) {
    if (!isGameOver) {
      if (guessedLetters.includes(letter.toUpperCase())) {
        return
      }
      setGuessedLetters((prevLetters) => [...prevLetters, letter])
    }
  }

  useEffect(() => {
    if (
      guessedLetters.filter(
        (letter) => !word.split("").includes(letter.toLowerCase())
      ).length > 5 ||
      word
        .split("")
        .every((letter) => guessedLetters.includes(letter.toUpperCase()))
    ) {
      setIsGameOver(true)
    }
  })

  return (
    <main className="game">
      <p className="game__result">
        {isGameOver &&
          (word
            .split("")
            .every((letter) => guessedLetters.includes(letter.toUpperCase()))
            ? "You won!"
            : `You lost! The correct word was ${word.toUpperCase()}.`)}
      </p>
      <Hangman word={word} guessedLetters={guessedLetters} />
      <Word word={word} guessedLetters={guessedLetters} />
      <Keyboard
        guessLetter={guessLetter}
        guessedLetters={guessedLetters}
        word={word}
      />
      {isGameOver && (
        <button className="game__retry" onClick={() => location.reload()}>
          Try again
        </button>
      )}
    </main>
  )
}

export default App
