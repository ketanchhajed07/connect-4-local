import styled from "styled-components";
import Logo from "../components/UI/Logo";
import MenuButton from "../components/UI/MenuButton";
import { useGame } from "../contexts/gameContext";
import { useNavigate } from "react-router-dom";

const StyledStart = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: var(--color-purple);

  @media (min-width: 48em) {
    background-color: var(--color-dark-purple);
  }
`;

const StartMenu = styled.div`
  margin: 1.6rem 2rem calc(1.6rem + 1rem) 2rem;
  width: 100%;
  max-width: 48rem;
  @media (min-width: 48em) {
    width: 48rem;
    max-width: 48rem;
    padding: 6.5rem 3.6rem;
    background-color: var(--color-purple);
    border: var(--border-default);
    box-shadow: var(--shadow-default);
    border-radius: var(--border-radius-md);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 6rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

function Start() {
  const { dispatch } = useGame();
  const navigate = useNavigate();

  function handleStartGame() {
    dispatch({ type: "start" });
    navigate("/game");
  }

  function goToRules() {
    navigate("/rules");
  }

  return (
    <StyledStart>
      <StartMenu>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <ButtonGroup>
          <MenuButton
            color="yellow"
            justify="between"
            onClick={handleStartGame}
          >
            <span>play vs player</span>
            <span>
              <img src="player-vs-player.svg" alt="Play vs Player" />
            </span>
          </MenuButton>
          <MenuButton justify="between" onClick={goToRules}>
            game rules
          </MenuButton>
        </ButtonGroup>
      </StartMenu>
    </StyledStart>
  );
}

export default Start;
