import styled from "styled-components";
import { useGame } from "../contexts/gameContext";

const TurnBg = styled.img``;

const TurnBox = styled.div`
  height: 10rem;
  width: 14rem;
  color: ${({ $textColor }) =>
    $textColor === "white" ? "var(--color-white)" : "var(--color-black)"};
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TurnText = styled.p`
  font-size: var(--font-size-sm);
`;

const TimerText = styled.p`
  font-size: var(--font-size-xl);
  text-transform: lowercase;
`;

function TurnIndicator() {
  const { currentPlayer, winner, timer } = useGame();

  return (
    <>
      {winner === null && (
        <TurnBg
          src={`turn-background-${currentPlayer === 0 ? "red" : "yellow"}.svg`}
          alt="turn background"
        />
      )}
      {winner === null && (
        <TurnBox $textColor={currentPlayer === 0 ? "white" : "black"}>
          <TurnText>Player {currentPlayer + 1}&rsquo;s turn </TurnText>
          <TimerText>{timer}s</TimerText>
        </TurnBox>
      )}
    </>
  );
}

export default TurnIndicator;
