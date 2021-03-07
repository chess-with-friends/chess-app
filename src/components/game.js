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
  }

  render() {
    return (
      <div>
        <BoardView board={this.state.board} />
      </div>
    )
  }
}
