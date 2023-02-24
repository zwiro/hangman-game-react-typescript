import { useState } from "react"
import Hangman from "./components/Hangman"
import Keyboard from "./components/Keyboard"
import Word from "./components/Word"
import words from "./words.json"
import "./App.css"

function App() {
  const [word, setWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [letters, setLetters] = useState<string[]>([])
  return (
    <main className="game">
      <p className="game__result">You won!</p>
      <Hangman />
      <Word />
      <Keyboard />
    </main>
  )
}

export default App
