import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useGame } from "../contexts/gameContext";
import { useEffect } from "react";
import WinnerBg from "../components/WinnerBg";
import Board from "../components/Board";
import Container from "../components/Container";
import Scorecard from "../components/Scorecard";
import Header from "../components/Header";
import Info from "../components/Info";
import TurnIndicator from "../components/TurnIndicator";
import OverlayMenu from "../components/OverlayMenu";
import WinnerIndicator from "../components/WinnerIndicator";

const StyledGame = styled.div`
  background-color: var(--color-purple);
  min-height: 100vh;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Game() {
  const { scores, timer, paused, status, dispatch } = useGame();

  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (status === "playing" && !paused && timer > 0) {
      interval = setInterval(() => {
        dispatch({ type: "decrease-timer" });
      }, 1000);
    }
    if (status === "playing" && !paused && timer === 0) {
      dispatch({ type: "timer-expired" });
    }
    return () => clearInterval(interval);
  }, [status, timer, dispatch, paused]);

  useEffect(() => {
    if (status === "waiting") {
      navigate("/");
    }
  }, [status, navigate]);

  return (
    <StyledGame>
      <OverlayMenu />

      <WinnerBg />
      <Header />
      <Container>
        <Board />
        <Scorecard
          name="Player 1"
          score={scores[0]}
          emojiSrc="player-one.svg"
          position="left"
        />
        <Scorecard
          name="Player 2"
          score={scores[1]}
          emojiSrc="player-two.svg"
          position="right"
        />

        <Info>
          <TurnIndicator />
          <WinnerIndicator />
        </Info>
      </Container>
    </StyledGame>
  );
}

export default Game;
