import styled from "styled-components";
import { useGame } from "../contexts/gameContext";
import BoardColumn from "./BoardColumn";

const StyledBoard = styled.div`
  display: flex;
  gap: 1.2rem;
  padding: 0.8rem 0.8rem 3.6rem 0.8rem;
  width: max-content;

  background-color: var(--color-white);
  border-radius: var(--border-radius-sm);
  border: var(--border-default);
  box-shadow: var(--shadow-default);

  @media (min-width: 48em) {
    gap: 2.4rem;
    padding: 2rem 2rem 6rem 2rem;
    border-radius: var(--border-radius-md);
  }
`;

function Board() {
  const { board } = useGame();
  return (
    <StyledBoard>
      {board.map((col, i) => (
        <BoardColumn column={col} columnIndex={i} key={i} />
      ))}
    </StyledBoard>
  );
}

export default Board;
