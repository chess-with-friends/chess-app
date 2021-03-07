import React from 'react'
import Piece from './piece'

function Board({board}) {
  const boardView = board.grid.map((row, i) => {
    const newRow = row.map((piece, j) => {
      return (
      <li>
        <Piece key={[i, j]} piece={piece}/>
      </li>)
    })
    return (
      <ul>
        {newRow}
      </ul>
    )
  });
  return (
    <div>
      {boardView}
    </div>
  )
}

export default Board