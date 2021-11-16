import React from "react";
import { ModalBody } from "../Styles/Modal.styled";
import Player from "./Player";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0 0.5em;

  thead {
    text-align: left;
    height: 1.5em;
    color: #0084e6;
    font-size: 22px;

    tr th:first-child {
      padding-left: 0.8em;
    }
    tr th:last-child {
      text-align: center;
    }
  }
  tbody {
    tr {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      line-height: 2em;
      border-radius: 0.7em;
      td:first-child {
        padding-left: 0.8em;
        border-top-left-radius: 0.7em;
        border-bottom-left-radius: 0.7em;
      }
      td:last-child {
        text-align: center;
        border-top-right-radius: 0.7em;
        border-bottom-right-radius: 0.7em;
      }
    }
  }
`;

const HighScores = ({ players, newPlayer }) => {
  const addedPlayerIdx = players.findIndex(player => {
    return player.name === newPlayer.name && player.score === newPlayer.score;
  });
  return (
    <ModalBody>
      <StyledTable>
        <thead>
          <tr>
            <th style={{ width: "30%" }}>#</th>
            <th style={{ width: "50%" }}>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, idx) => {
            return (
              <Player
                key={idx}
                rank={idx + 1}
                name={player.name}
                score={player.score}
                isNew={addedPlayerIdx === idx}
              />
            );
          })}
        </tbody>
      </StyledTable>
    </ModalBody>
  );
};

export default HighScores;
