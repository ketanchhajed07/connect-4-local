import styled from "styled-components";

const StyledScoreCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 0.8rem 3.6rem;
  border: var(--border-default);
  box-shadow: var(--shadow-default);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-white);
  position: absolute;
  top: 4rem;
  left: ${({ $position }) => ($position === "left" ? "0" : "auto")};
  right: ${({ $position }) => ($position === "right" ? "0" : "auto")};

  & > img {
    position: absolute;
    top: 50%;
    left: ${({ $position }) => ($position === "left" ? "0" : "auto")};
    right: ${({ $position }) => ($position === "right" ? "0" : "auto")};
    transform: ${({ $position }) =>
      $position === "left" ? "translate(-50%, -50%)" : "translate(50%, -50%)"};

    @media (min-width: 80em) {
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0.8rem 3.6rem;
    }
  }

  @media (min-width: 48em) {
    flex-direction: ${({ $position }) =>
      $position === "left" ? "row" : "row-reverse"};
    gap: 4rem;
    left: ${({ $position }) => ($position === "left" ? "2.7rem" : "auto")};
    right: ${({ $position }) => ($position === "right" ? "2.7rem" : "auto")};
    padding: 0.8rem 3.6rem 0.8rem 4.8rem;
    top: 3rem;
  }

  @media (min-width: 80em) {
    flex-direction: column;
    gap: 0.4rem;
    top: 50%;
    left: ${({ $position }) => ($position === "left" ? "0" : "auto")};
    right: ${({ $position }) => ($position === "right" ? "0" : "auto")};
    transform: ${({ $position }) =>
      $position === "left"
        ? "translate(calc(-100% - 4.8rem), -50%)"
        : "translate(calc(100% + 4.8rem), -50%)"};
    padding: 4rem 2.8rem 1.6rem 2.8rem;
  }
`;

const PlayerName = styled.p`
  font-size: var(font-size-sm);

  @media (min-width: 48em) {
    font-size: var(--font-size-md);
  }
`;
const PlayerScore = styled.p`
  font-size: 3.2rem;

  @media (min-width: 48em) {
    font-size: var(--font-size-xl);
  }
`;
const PlayerEmoji = styled.img``;

function Scorecard({ name, score, emojiSrc, position }) {
  return (
    <StyledScoreCard $position={position}>
      <PlayerName>{name}</PlayerName>
      <PlayerScore>{score}</PlayerScore>
      <PlayerEmoji src={emojiSrc} />
    </StyledScoreCard>
  );
}

export default Scorecard;
