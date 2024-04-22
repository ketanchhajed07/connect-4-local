import styled from "styled-components";
import { useGame } from "../contexts/gameContext";

const StyledWinnerBg = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 23.5rem;
  background-color: ${({ $color }) =>
    $color === "red"
      ? "var(--color-red)"
      : $color === "yellow"
      ? "var(--color-yellow)"
      : "var(--color-dark-purple)"};
  border-top-left-radius: var(--border-radius-lg);
  border-top-right-radius: var(--border-radius-lg);
  @media (min-width: 80em) {
    height: 20rem;
  }
`;

function WinnerBg() {
  const {winner} = useGame();
  return (
    <StyledWinnerBg
      $color={winner === 0 ? "red" : winner === 1 ? "yellow" : "purple"}
    />
  );
}

export default WinnerBg;
