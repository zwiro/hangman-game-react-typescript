import { useState } from "react"
import Hangman from "./components/Hangman"
import Keyboard from "./components/Keyboard"
import Word from "./components/Word"
import words from "./words.json"

function App() {
  const [word, setWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [letters, setLetters] = useState<string[]>([])
  return (
    <main
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "2rem" }}>You won!</p>
      <Hangman />
      <Word />
      <Keyboard />
    </main>
  )
}

export default App
