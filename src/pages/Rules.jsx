import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledRules = styled.div`
  min-height: 100vh;
  background-color: var(--color-purple);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RulesModal = styled.div`
  position: relative;
  width: 48rem;
  max-width: 48rem;
  padding: 2.4rem;
  background-color: var(--color-purple);
  border: var(--border-default);
  box-shadow: var(--shadow-default);
  border-radius: var(--border-radius-md);
  background-color: var(--color-white);
  margin: 1.6rem 1.6rem 4rem 1.6rem;
`;

const Title = styled.h2`
  font-size: var(--font-size-xl);
  text-align: center;
  margin-bottom: 2.4rem;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 2.4rem;
`;

const Heading = styled.h3`
  font-size: var(--font-size-md);
  color: var(--color-purple);
`;

const Text = styled.p`
  font-size: var(--font-size-sm);
  color: rgba(0, 0, 0, 0.7);
  text-transform: none;

  ol {
    padding-left: 1.6rem;

    li {
      margin-bottom: 0.8rem;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);

  &:hover circle[fill="#000000"] {
    transition: fill 0.3s;
    fill: var(--color-dark-purple);
  }
`;

function Rules() {
  const navigate = useNavigate();

  function handleClose() {
    navigate("/");
  }
  return (
    <StyledRules>
      <RulesModal>
        <Title>Rules</Title>
        <TextBlock>
          <Heading>objective</Heading>
          <Text>
            Be the first player to connect 4 of the same colored discs in a row
            (either vertically, horizontally, or diagonally).
          </Text>
        </TextBlock>
        <TextBlock>
          <Heading>how to play</Heading>
          <Text>
            <ol type="1">
              <li>Red goes first in the first game.</li>
              <li>
                Players must alternate turns, and only one disc can be dropped
                in each turn.{" "}
              </li>
              <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
              <li>
                The starter of the previous game goes second on the next game.
              </li>
            </ol>
          </Text>
        </TextBlock>
        <CloseButton onClick={handleClose}>
          <svg
            width="70px"
            height="75px"
            viewBox="0 0 70 75"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>icon-check</title>
            <g
              id="Designs"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="icon-check">
                <circle
                  id="Oval-Copy-37"
                  fill="#000000"
                  cx="35"
                  cy="35"
                  r="35"
                ></circle>
                <circle
                  id="Oval-Copy-38"
                  fill="#000000"
                  cx="35"
                  cy="40"
                  r="35"
                ></circle>
                <circle
                  id="Oval-Copy-39"
                  fill="#FD6687"
                  cx="35"
                  cy="35"
                  r="32"
                ></circle>
                <polyline
                  id="Path"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  points="20 34.5819497 30.2640104 44.84596 50.1099704 25"
                ></polyline>
              </g>
            </g>
          </svg>
        </CloseButton>
      </RulesModal>
    </StyledRules>
  );
}

export default Rules;
