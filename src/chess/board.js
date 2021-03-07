class Board {
  constructor() {
    this.grid = []
    this.sentinel = "";
    this.makeStartingGrid()
  }

  makeStartingGrid() {
    for (let i = 0; i < 8; i++) {
      this.grid.push([]);
      for (let j = 0; j < 8; j++) {
        this.grid[i].push(this.sentinel)
      }
    }
  }
}

export default Board;