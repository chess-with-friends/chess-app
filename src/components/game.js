import React, { Component } from 'react'
import Board from '../chess/board';
import BoardView from './board'

export default class Game extends Component {
  constructor(props) {
    super(props);
    const board = new Board ();
    this.state = {
      board
    }
    this.updateBoard = this.updateBoard.bind(this);
  }

  // update state whenever board instance is updated
  updateBoard(board) {
    this.setState(board);
  }

  render() {
    return (
      <div>
        <BoardView board={this.state.board} updateBoard={this.updateBoard}/>
      </div>
    )
  }
}
