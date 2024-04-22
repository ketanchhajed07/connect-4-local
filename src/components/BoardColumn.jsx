import styled from "styled-components";
import { useGame } from "../contexts/gameContext";
import BoardCell from "./BoardCell";
import checkForWin from "../utils/checkForWin";
import checkForDraw from "../utils/checkForDraw";

const StyledBoardColumn = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 1.2rem;
  position: relative;

  &:hover::after {
    content: ${({ $activeColor }) => `url("marker-${$activeColor}.svg")`};
    position: absolute;
    top: -4.2rem;
    left: 50%;
    transform: translateX(-70%);
    scale: 0.7;
    cursor: pointer;
    display: ${({ $display }) => $display};

    @media (min-width: 48em) {
      top: -6rem;
      transform: translateX(-50%);
      scale: 1;
    }
  }

  @media (min-width: 48em) {
    gap: 2.4rem;
  }
`;

function BoardColumn({ columnIndex, column }) {
  const { board, currentPlayer, status, paused, dispatch } = useGame();

  function handleMakeMove(columnKey) {
    if (board[columnKey].every((cell) => cell !== null)) return;
    if (status !== "playing" || paused) return;
    let moved = false;
    const updatedBoard = board.map((col, i) => {
      if (i === columnKey) {
        return col.map((cell) => {
          if (cell === null && !moved) {
            moved = true;
            return currentPlayer;
          }
          return cell;
        });
      } else {
        return col;
      }
    });
    const winningCells = checkForWin(updatedBoard, currentPlayer);
    let isDraw = false;
    if (winningCells.length === 0) {
      isDraw = checkForDraw(updatedBoard);
    }
    if (winningCells.length > 0)
      dispatch({
        type: "win",
        payload: { updatedBoard, currentPlayer, winningCells },
      });
    if (isDraw)
      dispatch({ type: "draw", payload: { updatedBoard, currentPlayer } });
    if (winningCells.length === 0 && !isDraw)
      dispatch({ type: "move", payload: { updatedBoard, currentPlayer } });
  }

  return (
    <StyledBoardColumn
      $activeColor={currentPlayer === 0 ? "red" : "yellow"}
      $display={status === "playing" && !paused ? "block" : "none"}
      onClick={() => handleMakeMove(columnIndex)}
    >
      {column?.map((cell, j) => {
        return (
          <BoardCell
            key={j}
            cell={cell}
            cellIndex={j}
            columnIndex={columnIndex}
          ></BoardCell>
        );
      })}
    </StyledBoardColumn>
  );
}

export default BoardColumn;
