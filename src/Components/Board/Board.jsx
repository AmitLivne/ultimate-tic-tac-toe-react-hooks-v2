import {StyledBoard} from "./Board.styled";
import {getBoardRows} from "./BoardUtils";

export default function Board({board, boardInfo, size}) {
    return <StyledBoard
        boardType={boardInfo?.type}
        className={boardInfo?.type === 'global' ? 'global-board' : 'local-board'}
        wonBoard={boardInfo.wonBoard || false}
        isClickable={!!boardInfo?.isClickable}>
        {getBoardRows(board, size)}
    </StyledBoard>;
};