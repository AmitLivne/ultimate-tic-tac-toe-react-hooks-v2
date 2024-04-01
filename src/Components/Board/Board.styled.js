import styled from "styled-components";

export const StyledBoard = styled.div`
  font-size: 10px;
  @keyframes animatePlayer {
    50% {
      font-size: 190px;
    }

    100% {
      font-size: 120px;
      transform: rotateZ(360deg);
    }
  }
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: ${({ boardType }) => (boardType === "global" ? "1em" : "")};
  position: relative;
  width: ${({ boardType }) => (boardType === "global" ? "90%" : "")};
  flex: ${({ boardType }) => (boardType === "global" ? "" : "1")};
  background: ${({ wonBoard, isClickable }) => wonBoard ? "#fade72" : isClickable ? "#b8b8b8" : "#f2f2f2"};
  aspect-ratio : 1 / 1;

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

  @media (min-width: 620px) {
    width: ${({ boardType }) => (boardType === "global" ? "650px" : "")};
  }

`;

export const BoardRow = styled.div`
  display: flex;
  flex: 1;
`;