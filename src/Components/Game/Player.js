import React from "react";
import styled from "styled-components";

const StyledPlayerRow = styled.tr`
  background: ${({ isNew }) => isNew ? "#63b7f6" : "transparent"};
`;

const Player = ({rank, name, score, isNew}) => {
  return (
    <StyledPlayerRow isNew={isNew}>
      <td>{rank}</td>
      <td>{name}</td>
      <td>{score}</td>
    </StyledPlayerRow>
  );
};

export default Player;
