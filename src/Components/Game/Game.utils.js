import {boardSize} from "../../Utils/Constants";
import {highScoresMockData} from "./Game.constants";

export function getWinningPatterns() {
    let patterns = [];
    let mainDiagonalPattern = [];
    let antiDiagonalPattern = [];

    for (let i = 0; i < boardSize; i++) {
        let rowPattern = [];
        let colPattern = [];
        mainDiagonalPattern.push(i + i * boardSize);
        antiDiagonalPattern.push(boardSize * (i + 1) - (i + 1));
        for (let j = 0; j < boardSize; j++) {
            rowPattern.push(i * boardSize + j);
            colPattern.push(i + j * boardSize);
        }
        patterns.push(rowPattern, colPattern);
    }
    patterns.push(mainDiagonalPattern, antiDiagonalPattern);
    return patterns;
};

export function getHighScores() {
    return JSON.parse(localStorage.getItem('highScores')) || highScoresMockData;
};