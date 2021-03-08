class Piece {
  constructor(color, pos) {
    this.color = color;
    this.pos = pos;
  } 
}

// for now create an empty piece as placeholder
class NullPiece extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.symbol = ""
  }
}

class Pawn extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.symbol = PIECE[this.color].pawn;
  }
}

class King extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.symbol = PIECE[this.color].king;
  }
}

class Queen extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.symbol = PIECE[this.color].queen;
  }
}

class Rook extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.symbol = PIECE[this.color].rook;
  }
}

class Bishop extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.symbol = PIECE[this.color].bishop;
  }
}

class Knight extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.symbol = PIECE[this.color].knight;
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
        this.grid[i].push(this.sentinel)
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
}

export default Board;