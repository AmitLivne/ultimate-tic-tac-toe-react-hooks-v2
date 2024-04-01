import React from "react";
import {ModalBody} from "../../UI/Modal/Modal.styled";
import {HighScoresModalTable} from "./HighScoresModal.styled";
import HighScoresModalTableRow from "./HighScoresModalTableRow";

export function HighScoresModal({rows, newPlayer}) {
    const addedPlayerIdx = rows.findIndex(player => {
        return player.name === newPlayer.name && player.score === newPlayer.score;
    });
    const tableHeaders = (<thead>
    <tr>
        <th>#</th>
        <th>Name</th>
        <th>Score</th>
    </tr>
    </thead>)

    const tableBody = <tbody>
    {rows.map((player, idx) => {
        return (
            <HighScoresModalTableRow
                key={idx}
                rank={idx + 1}
                name={player.name}
                score={player.score}
                isNew={addedPlayerIdx === idx}
            />
        );
    })}
    </tbody>


    return (
        <ModalBody>
            <HighScoresModalTable>
                {tableHeaders}
                {tableBody}
            </HighScoresModalTable>
        </ModalBody>
    );
};

