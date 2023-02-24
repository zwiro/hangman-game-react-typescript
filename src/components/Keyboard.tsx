function Keyboard() {
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
    "W",
    "X",
    "Y",
    "Z",
  ]
  return (
    <div className="keyboard">
      {letters.map((letter, i) => (
        <div className="keyboard__letter" key={`${letter}-${i}`}>
          {letter}
        </div>
      ))}
    </div>
  )
}

export default Keyboard
