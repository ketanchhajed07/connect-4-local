import styled from "styled-components";
import { useGame } from "../contexts/gameContext";
import BoardCell from "./BoardCell";
import checkForWin from "../utils/checkForWin";

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
  const { board, currentPlayer, status, paused, moves, dispatch } = useGame();

  function handleMakeMove(columnKey) {
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
    const updatedMoves = moves + 1;
    const winningCells = checkForWin(updatedBoard, currentPlayer);
    if (winningCells.length > 0)
      dispatch({
        type: "win",
        payload: { updatedBoard, currentPlayer, winningCells },
      });
    if (winningCells.length === 0 && updatedMoves === 42)
      dispatch({ type: "draw", payload: { updatedBoard, currentPlayer } });
    if (winningCells.length === 0 && updatedMoves < 42)
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
