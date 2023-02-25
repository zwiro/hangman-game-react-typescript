import { useEffect, useState } from "react"

type HangmanProps = {
  word: string
  guessedLetters: string[]
}

function Hangman({ word, guessedLetters }: HangmanProps) {
  const [wrongLetters, setWrongLetters] = useState<string[]>([])

  useEffect(() => {
    setWrongLetters(
      guessedLetters.filter(
        (letter) => !word.split("").includes(letter.toLowerCase())
      )
    )
  }, [guessedLetters])

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
