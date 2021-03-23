import { Piece, PIECE } from "./piece"

class Knight extends Piece {
  constructor(color, pos) {
    super(color, pos)
    this.symbol = PIECE[this.color].knight
  }
}

export default Knight
