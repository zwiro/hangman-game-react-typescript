import { useState } from "react"

type WordProps = {
  word: string
  guessedLetters: string[]
}

function Word({ word, guessedLetters }: WordProps) {
  console.log(word, word[0], guessedLetters[0])
  console.log(0 === word.split("").indexOf(guessedLetters[0]?.toLowerCase()))
  return (
    <div>
      {word.split("").map((letter, i) => (
        <span key={`${letter}-${i}`} className="word__letter">
          {guessedLetters.map((item) =>
            i === word.split("").indexOf(item.toLowerCase()) ? item : " "
          )}
        </span>
      ))}
    </div>
  )
}

export default Word
