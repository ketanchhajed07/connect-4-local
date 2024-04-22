import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-dark-purple);
  color: var(--color-white);
  padding: 0.8rem 1.6rem;
  text-transform: uppercase;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  &:hover {
    background-color: var(--color-red);
  }
`;

function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
