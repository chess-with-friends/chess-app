import { Piece } from './piece';

class NullPiece extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.symbol = ""
  }
}

export default NullPiece;