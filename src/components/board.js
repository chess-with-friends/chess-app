import React, { useState } from "react"
import Piece from "./piece"

const Board = ({ board, updateBoard }) => {
  const [move, setMove] = useState({})

  const handleClick = (pos) => {
    if (move.startPos) {
      setMove(Object.assign(move, { endPos: pos }))
      // for debugging
      console.log(board.position(move.startPos))
      console.log(board.position(move.endPos))
      board.movePiece(move.startPos, move.endPos)
      // for debugging
      console.log(board)
      updateBoard(board)
      setMove({})
    } else {
      setMove(Object.assign(move, { startPos: pos }))
    }
  }

  const boardView = board.grid.map((row, i) => {
    const newRow = row.map((piece, j) => {
      return (
        <li key={`row-${i}-col-${j}`} onClick={() => handleClick([i, j])}>
          <Piece key={[i, j]} piece={piece} />
        </li>
      )
    })
    return <ul key={`row-${i}`}>{newRow}</ul>
  })
  return <div>{boardView}</div>
}

export default Board
