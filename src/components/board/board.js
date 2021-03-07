import React, { Component } from 'react'
import Piece from '../pieces/piece';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: []
    }
  }

  componentDidMount() {
    this.generateBoard();
    console.log("mount")
  }

  generateBoard() {
    for (let i = 0; i < 8; i++) {
      this.state.board.push([]);
      for (let j = 0; j < 8; j++) {
        const piece = <Piece pos={[i, j]} />
        this.state.board[i].push(piece)
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.board.map(row => {
          const newRow = row.map(piece => <li>{piece}</li>)
          return <ul>{newRow}</ul>
        })}
      </div>
    )
  }
}

export default Board;