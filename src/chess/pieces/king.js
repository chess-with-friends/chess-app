import { Piece, PIECE } from "./piece"

class King extends Piece {
  constructor(color, pos) {
    super(color, pos)
    this.symbol = PIECE[this.color].king
  }
}

export default King
