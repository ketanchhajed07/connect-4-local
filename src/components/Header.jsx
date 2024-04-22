import styled from "styled-components";
import Button from "./UI/Button";
import Logo from "./UI/Logo";
import { useGame } from "../contexts/gameContext";

const StyledHeader = styled.header`
  padding: 2.4rem 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  width: 31.8rem;
  margin: 0 auto;

  @media (min-width: 48em) {
    width: 63.8rem;
  }
`;

function Header() {
  const { dispatch } = useGame();

  function handlePauseGame() {
    dispatch({ type: "pause" });
  }

  function handleRestartGame() {
    dispatch({ type: "restart" });
  }

  return (
    <StyledHeader>
      <Button onClick={handlePauseGame}>menu</Button>
      <Logo />
      <Button onClick={handleRestartGame}>restart</Button>
    </StyledHeader>
  );
}

export default Header;
