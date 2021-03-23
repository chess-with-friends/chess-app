import { Piece, PIECE } from "./piece"

class Bishop extends Piece {
  constructor(color, pos) {
    super(color, pos)
    this.symbol = PIECE[this.color].bishop
  }
}

export default Bishop
