function checkForDraw(board) {
  // No win, check for draw
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === null) {
        return false; // If any cell is empty, it's not a draw, return no win
      }
    }
  }

  // If no cells are empty and no one has won, it's a draw
  return true;
}

export default checkForDraw;
