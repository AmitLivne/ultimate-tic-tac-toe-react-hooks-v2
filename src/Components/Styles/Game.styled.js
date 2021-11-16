import styled from "styled-components";

export const StyledSqaure = styled.div`
  font-size: 10px;
  @keyframes animatePlayer {
    50% {
      font-size: 250px;
    }

    100% {
      font-size: 180px;
      transform: rotateZ(360deg);
    }
  }
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  position: relative;
  padding: ${({ boardType }) => (boardType === "global" ? "1em" : "")};
  width: ${({ boardType }) => (boardType === "global" ? "50em" : "")};
  height: ${({ boardType }) => (boardType === "global" ? "50em" : "")};
  flex: ${({ boardType }) => (boardType === "global" ? "" : "1")};
  background: ${({ wonBoard,isClickable }) => wonBoard ? "#fade72" : isClickable ? "#b8b8b8" : "#f2f2f2"};

  &::before {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    animation: animatePlayer 1s forwards;
    z-index: 1;
    content: ${({ wonBoard }) =>
      wonBoard ? (wonBoard.winner === "X" ? "'X'" : "'O'") : ""};
    color: ${({ wonBoard }) =>
      wonBoard ? (wonBoard.winner === "X" ? "#F78888" : "#006db6") : ""};
  }
`;

export const StyledRow = styled.div`
  display: flex;
  flex: 1;
`;
export const StyledLocalSqaure = styled.div`
  font-size: 38px;
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
`;
