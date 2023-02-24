import { useEffect, useState } from "react"

type KeyboardProps = {
  guessLetter: (letter: string) => void
  guessedLetters: string[]
  word: string
}

function Keyboard({ guessLetter, guessedLetters, word }: KeyboardProps) {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]

  return (
    <div
      className="keyboard"
      onClick={(e) => {
        if (e.target instanceof HTMLDivElement) {
          const letter = e.target.dataset.letter || ""
          if (letters.includes(letter)) {
            letter && guessLetter(letter)
          }
        }
      }}
    >
      {letters.map((letter, i) => (
        <div
          className={`keyboard__letter ${
            guessedLetters.includes(letter) &&
            word.split("").includes(letter.toLowerCase())
              ? "keyboard__letter--correct"
              : guessedLetters.includes(letter) && "keyboard__letter--incorrect"
          }`}
          key={`${letter}-${i}`}
          data-letter={letter}
        >
          {letter}
        </div>
      ))}
    </div>
  )
}

export default Keyboard
