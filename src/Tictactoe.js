import { useState } from "react";


// generate a board

const generateBoard = (size) => {
  const board = [];

  for (let i = 0; i < size; i++) {
    board.push([...Array(size)])
  }

  return board
}

function Tictactoe() {

  const [board, setBoard] = useState(generateBoard(3))

  return (
    <div>
      {
        board.map((row, r) => {
          return (
            <div key={r}
            style ={{
              display: 'flex',
            }}>
              {row.map((cell, c) => {
                return (
                  <div
                    key={c}
                    style={{
                      border: 'solid blue 1px',
                      height: '80px',
                      width: '80px',
                    }}
                  >
                    {cell}
                  </div>
                )
              })}
            </div>
          )
        })}
    </div>
  )
}

export default Tictactoe;