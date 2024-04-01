import React from "react";
import {StyledHighScoresModalTableRow} from "./HighScoresModalTableRow.style";

export default function HighScoresModalTableRow({rank, name, score, isNew}) {
  return (
    <StyledHighScoresModalTableRow isNew={isNew}>
      <td>{rank}</td>
      <td>{name}</td>
      <td>{score}</td>
    </StyledHighScoresModalTableRow>
  );
};