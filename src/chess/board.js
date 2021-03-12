import {
  Pawn,
  Rook,
  Knight,
  Bishop,
  Queen,
  King,
  NullPiece 
} from './pieces';
import { Piece } from './pieces/piece';

class Board {
  constructor() {
    this.grid = []
    this.sentinel = new NullPiece();
    this.makeStartingGrid()
  }

  makeStartingGrid() {
    for (let i = 0; i < 8; i++) {
      this.grid.push([]);
      for (let j = 0; j < 8; j++) {
        const sentinel = new NullPiece(null, [i, j]);
        this.grid[i].push(sentinel);
      }
    }
    ['black', 'white'].forEach(color => {
      this.fillBackRow(color);
      this.fillPawnRow(color);
    })
  }

  fillBackRow(color) {
    const row = color === 'white' ? 7 : 0;
    const classes = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook]
    classes.forEach((piece, i) => {
      const p = new piece(color, [row, i]);
      this.addPiece([row, i], p);
    })
  }

  fillPawnRow(color) {
    const row = color === 'white' ? 6 : 1;
    for (let i = 0; i < 8; i++) {
      const piece = new Pawn(color, [row, i])
      this.addPiece([row, i], piece)
    }
  }

  addPiece(pos, piece) {
    const [row, col] = pos;
    this.grid[row][col] = piece;
  }

  position(pos) {
    const [row, col] = pos;
    return this.grid[row][col];
  }

  move(pos, piece) {
    const [row, col] = pos;
    piece.pos = pos;
    this.grid[row][col] = piece;
  }

  movePiece(startPos, endPos) {
    // require validation (TBD)
    if (this.withinBoard(startPos) && this.withinBoard(endPos) && !this.isEmpty(startPos)) {
      this.move(endPos, this.position(startPos));
      this.move(startPos, new NullPiece(null, startPos));
    }
  }

  isEmpty(pos) {
    return this.position(pos).color === null;
  }

  withinBoard(pos) {
    return pos.every(num => num < 8 && num >= 0);
  }
}

export default Board;