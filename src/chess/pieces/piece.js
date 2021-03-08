class Piece {
  constructor(color, pos) {
    this.color = color;
    this.pos = pos;
  } 
}

const PIECE = {
  white: {
    king:	'♔',
    queen: '♕',
    rook:	'♖',
    bishop:	'♗',
    knight:	'♘',
    pawn: '♙'
  },
  black: {
    king:	'♚',
    queen:	'♛',
    rook:	'♜',
    bishop:	'♝',
    knight:	'♞',
    pawn:	'♟︎'
  }
}

export {
  Piece,
  PIECE
};