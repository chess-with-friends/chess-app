import { Piece, PIECE } from './piece';

class Rook extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.symbol = PIECE[this.color].rook;
  }
}

export default Rook;