import { useState } from "react"

function Hangman() {
  const [wrongLetters, setWrongLetters] = useState<string[]>([])
  return (
    <div className="hangman">
      <div className="hangman__ground" />
      <div className="hangman__pole" />
      <div className="hangman__rod" />
      <div className="hangman__grip" />
      {wrongLetters.length > 0 && <div className="hangman__head" />}
      {wrongLetters.length > 1 && <div className="hangman__body" />}
      {wrongLetters.length > 2 && <div className="hangman__left-hand" />}
      {wrongLetters.length > 3 && <div className="hangman__right-hand" />}
      {wrongLetters.length > 4 && <div className="hangman__left-leg" />}
      {wrongLetters.length > 5 && <div className="hangman__right-leg" />}
    </div>
  )
}

export default Hangman
