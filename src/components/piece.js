import React, { Component } from 'react'

export default class Piece extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h2>{this.props.piece.symbol}</h2>
    )
  }
}
