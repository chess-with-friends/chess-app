import React, { Component } from 'react'
import sprite from './sprite.svg';

export default class Piece extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <svg className="piece">
        <use href={sprite + `#${this.props.piece.color}-${this.props.piece.constructor.name.toLowerCase()}`} />
      </svg>
    )
  }
}
