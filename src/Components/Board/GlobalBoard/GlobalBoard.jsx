import LocalBoard from "../LocalBoard/LocalBoard";
import Board from "../Board";

export default function GlobalBoard(props) {
    function getLocalBoard(idx) {
        return <LocalBoard
            key={idx}
            value={props?.localBoards?.[idx]}
            isClickable={props.isClickable}
            onClick={() => props.onClick(idx)}
        />;
    };

    return <Board
        board={(idx) => getLocalBoard(idx)}
        boardInfo={{
            type: "local",
            wonBoard: props.isWon.length > 0 ? {winner: props.isWon[0].player } : false,
            isClickable: props.isClickable || false
        }}
        size={props.size}
    />;
};