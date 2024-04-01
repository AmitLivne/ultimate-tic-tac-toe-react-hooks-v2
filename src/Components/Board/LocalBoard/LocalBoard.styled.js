import styled from "styled-components";

export const LocalBoardCell = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border: 1px solid black;
  cursor: pointer;
  color: ${({ val }) => (val === "X" ? "#F78888" : "#006db6")};
  &:hover {
    background: ${({ val, isClickable }) => (isClickable && (val !== "X" && val !== "O") ? "#838383" : "")};
  }

  @media (min-width: 620px) {
    font-size: 38px;

    @keyframes animatePlayer {
    50% {
      font-size: 250px;
    }

    100% {
      font-size: 180px;
      transform: rotateZ(360deg);
    }
  }
  }
`;