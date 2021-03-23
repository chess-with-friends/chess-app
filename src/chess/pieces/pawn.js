import { Piece, PIECE } from "./piece"

class Pawn extends Piece {
  constructor(color, pos) {
    super(color, pos)
    this.symbol = PIECE[this.color].pawn
  }
}

export default Pawn
