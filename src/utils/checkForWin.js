function checkForWin(board, player) {
  // Check horizontal locations for win
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 4; col++) {
      if (
        board[col][row] === player &&
        board[col + 1][row] === player &&
        board[col + 2][row] === player &&
        board[col + 3][row] === player
      ) {
        return [
          [col, row],
          [col + 1, row],
          [col + 2, row],
          [col + 3, row],
        ];
      }
    }
  }

  // Check vertical locations for win
  for (let col = 0; col < 7; col++) {
    for (let row = 0; row < 3; row++) {
      if (
        board[col][row] === player &&
        board[col][row + 1] === player &&
        board[col][row + 2] === player &&
        board[col][row + 3] === player
      ) {
        return [
          [col, row],
          [col, row + 1],
          [col, row + 2],
          [col, row + 3],
        ];
      }
    }
  }

  // Check positively sloped diagonals
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 3; row++) {
      if (
        board[col][row] === player &&
        board[col + 1][row + 1] === player &&
        board[col + 2][row + 2] === player &&
        board[col + 3][row + 3] === player
      ) {
        return [
          [col, row],
          [col + 1, row + 1],
          [col + 2, row + 2],
          [col + 3, row + 3],
        ];
      }
    }
  }

  // Check negatively sloped diagonals
  for (let col = 3; col < 7; col++) {
    for (let row = 0; row < 3; row++) {
      if (
        board[col][row] === player &&
        board[col - 1][row + 1] === player &&
        board[col - 2][row + 2] === player &&
        board[col - 3][row + 3] === player
      ) {
        return [
          [col, row],
          [col - 1, row + 1],
          [col - 2, row + 2],
          [col - 3, row + 3],
        ];
      }
    }
  }

  // No win
  return [];
}

export default checkForWin;
