import { StyledSqaure, StyledRow } from "../Components/Styles/Game.styled"
export const boardSize = 3;

export const CreateMatrix = ({info, component, size}) => {
  const boardType = info.boardType;
  const wonBoard = info.wonBoard || false;
  const isClickable = info.isClickable || false;
  let rows = [];
  for (let i = 0; i < size; i++) {
    let cols = [];
    for (let j = 0; j < size; j++) {
      cols.push(component(i * size + j));
    }
    rows.push(
      <StyledRow key={i}>{cols}</StyledRow>
    );
  }
  return <StyledSqaure boardType={boardType} wonBoard={wonBoard} isClickable={isClickable}>{rows}</StyledSqaure>;
};

export const CreateWinningPatterns = () => {
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

const predefinedhighScores = [
  {name: "El Professor", score: 15},
  {name: "Harley Quinn", score: 12},
  {name: "Messi", score: 7},
  {name: "Rick and Morty", score: 5},
  {name: "LeBron", score: 30},
];

export const CreateHighScores = () => {
  return JSON.parse(localStorage.getItem('highScores')) || predefinedhighScores;
};