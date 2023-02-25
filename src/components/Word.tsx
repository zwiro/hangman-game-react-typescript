import { useState } from "react"

type WordProps = {
  word: string
  guessedLetters: string[]
}

function Word({ word, guessedLetters }: WordProps) {
  return (
    <div className="word__letters">
      {word.split("").map((letter, i) => (
        <div className="word__placeholder" key={`${letter}-${i}`}>
          <span
            className={`word__letter ${
              guessedLetters.includes(letter.toUpperCase()) &&
              "word__letter--revealed"
            }`}
          >
            {letter.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Word
