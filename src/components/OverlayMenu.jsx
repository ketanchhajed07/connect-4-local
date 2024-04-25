import styled from "styled-components";
import MenuButton from "./UI/MenuButton";
import { useGame } from "../contexts/gameContext";
import { useNavigate } from "react-router-dom";

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalMenu = styled.div`
  width: 48rem;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  padding: 3.2rem 1.6rem;
  background-color: var(--color-purple);
  border-radius: var(--border-radius-md);
  border: var(--border-default);
  box-shadow: var(--shadow-default);
  text-align: center;
  overflow: auto;
  @media (min-width: 48em) {
    padding: 3.2rem 3.6rem;
  }
`;
const ModalMenuHeading = styled.h2`
  font-size: var(--font-size-xl);
  color: var(--color-white);
  margin-bottom: 3.6rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

function OverlayMenu() {
  const { paused, dispatch } = useGame();
  const navigate = useNavigate();

  function handleQuitGame() {
    dispatch({ type: "quit" });
    navigate("/");
  }

  function handleRestartGame() {
    dispatch({ type: "restart" });
  }

  function handleResumeGame() {
    dispatch({ type: "resume" });
  }
  return (
    <>
      {paused && (
        <Overlay onClick={handleResumeGame} className="overlay">
          <ModalMenu>
            <ModalMenuHeading>pause</ModalMenuHeading>
            <ButtonGroup>
              <MenuButton onClick={handleResumeGame}>Continue game</MenuButton>
              <MenuButton onClick={handleRestartGame}>restart</MenuButton>
              <MenuButton onClick={handleQuitGame} color="red">
                quit game
              </MenuButton>
            </ButtonGroup>
          </ModalMenu>
        </Overlay>
      )}
    </>
  );
}

export default OverlayMenu;
