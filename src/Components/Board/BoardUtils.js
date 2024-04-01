import {BoardRow} from "./Board.styled";

export function getBoardRows(board, size) {
    let rows = [];
    [...Array(size)].map((item, i) => {
        let cols = [];
        [...Array(size)].map((item, j) => {
            cols = [...cols, board(i * size + j)];
        })
        rows = [...rows, <BoardRow>{cols}</BoardRow>];
    })
    return rows;
}