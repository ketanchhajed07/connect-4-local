import styled from "styled-components";
import { useGame } from "../contexts/gameContext";

const StyledBoardCell = styled.div`
  position: relative;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  border: 0.3rem solid var(--color-black);
  background-color: ${({ $color }) =>
    $color === "red"
      ? "var(--color-red)"
      : $color === "yellow"
      ? "var(--color-yellow)"
      : "var(--color-purple)"};
  box-shadow: ${({ $color }) =>
    $color === "red" || $color === "yellow"
      ? "inset 0 .3rem 0 0 rgba(0, 0, 0, 0.5)"
      : "inset 0 .7rem 0 0 var(--color-black)"};

  &::after {
    content: "";
    height: 1.6rem;
    width: 1.6rem;
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0.4rem solid var(--color-white);
    border-radius: 50%;
    display: ${({ $isWinningCell }) => ($isWinningCell ? "block" : "none")};

    @media (min-width: 48em) {
      height: 3.2rem;
      width: 3.2rem;
      border: 0.5rem solid var(--color-white);
    }
  }

  @media (min-width: 48em) {
    width: 6.4rem;
    height: 6.4rem;
    box-shadow: ${({ $color }) =>
      $color === "red" || $color === "yellow"
        ? "inset 0 .3rem 0 0 rgba(0, 0, 0, 0.5)"
        : "inset 0 1rem 0 0 var(--color-black)"};
  }
`;

function BoardCell({ cell, cellIndex, columnIndex }) {
  const { winningCells } = useGame();

  const isWinningCell = winningCells.some(
    ([winCol, winRow]) => winCol === columnIndex && winRow === cellIndex
  );

  return (
    <StyledBoardCell
      $isWinningCell={isWinningCell}
      $color={cell === 0 ? "red" : cell === 1 ? "yellow" : "purple"}
    ></StyledBoardCell>
  );
}

export default BoardCell;
