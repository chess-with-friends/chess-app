import React, { Component } from 'react'
import Piece from '../pieces/piece';

class Board extends Component {
  constructor(props) {
    super(props);
    this.grid = [];
    this.state = {
      board: this.generateBoard()
    }
  }

  componentDidMount() {
    this.generateBoard();
    console.log("mount")
  }

  generateBoard() {
    for (let i = 0; i < 8; i++) {
      this.grid.push([]);
      for (let j = 0; j < 8; j++) {
        this.grid[i].push(<Piece key={[i, j]} pos={[i, j]}/>)
      }
    }
    return this.grid;
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