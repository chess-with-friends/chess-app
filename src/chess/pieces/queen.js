import { Piece, PIECE } from './piece';

class Queen extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.symbol = PIECE[this.color].queen;
  }
}

export default Queen;