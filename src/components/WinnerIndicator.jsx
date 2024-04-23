import styled from "styled-components";
import { useGame } from "../contexts/gameContext";
import Button from "./UI/Button";

const WinnerBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-white);
  border-radius: var(--border-radius-sm);
  border: var(--border-default);
  box-shadow: var(--shadow-default);
`;

const WinnerName = styled.p`
  font-size: var(--font-size-sm);
`;

const WinnerText = styled.p`
  font-size: var(--font-size-xl);
`;
function WinnerIndicator() {
  const { winner, dispatch } = useGame();

  function handlePlayAgain() {
    dispatch({ type: "play-again" });
  }
  return (
    <>
      {winner !== null && (
        <WinnerBox>
          <WinnerName>
            {winner === -1 ? "match" : `Player ${winner + 1}`}
          </WinnerName>
          <WinnerText>{winner === -1 ? "drawn" : "wins"}</WinnerText>
          <Button onClick={handlePlayAgain}>play again</Button>
        </WinnerBox>
      )}
    </>
  );
}

export default WinnerIndicator;
