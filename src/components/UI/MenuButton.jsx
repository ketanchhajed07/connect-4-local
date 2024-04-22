import styled from "styled-components";

const StyledMenuButton = styled.button`
  display: flex;
  justify-content: ${({ $justify }) =>
    $justify === "between" ? "space-between" : "center"};
  align-items: center;
  width: 100%;
  height: 7.2rem;
  padding: 0 1.6rem;
  background-color: ${({ $color }) =>
    $color === "yellow"
      ? "var(--color-yellow)"
      : $color === "red"
      ? "var(--color-red)"
      : "var(--color-white)"};
  color: ${({ $color }) =>
    $color === "yellow"
      ? "var(--color-black)"
      : $color === "red"
      ? "var(--color-white)"
      : "var(--color-black)"};

  border: var(--border-default);
  box-shadow: var(--shadow-default);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-lg);
  transition: all 0.3s;
  text-transform: uppercase;

  &:hover {
    box-shadow: var(--shadow-hover);
    border: var(--border-hover);
  }
`;

function MenuButton({
  children,
  onClick,
  color = "white",
  justify = "center",
}) {
  return (
    <StyledMenuButton onClick={onClick} $color={color} $justify={justify}>
      {children}
    </StyledMenuButton>
  );
}

export default MenuButton;
