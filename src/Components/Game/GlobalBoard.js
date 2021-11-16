import { React, Fragment } from "react";
import LocalBoard from "./LocalBoard";
import { CreateMatrix } from "../../Utils/Utils";

const GlobalBoard = props => {
  const localBoard = idx => {
    return (
      <LocalBoard
        key={idx}
        value={props.localBoards[idx]}
        isClickable={props.isClickable}
        onClick={() => props.onClick(idx)}
      />
    );
  };
  return (
    <Fragment>
      {CreateMatrix({
        info: {
          boardType: "local",
          wonBoard: props.isWon.length > 0 ? {winner: props.isWon[0].player } : false,
          isClickable: props.isClickable || false
        },
        component: localBoard,
        size: props.size
      })}
    </Fragment>
  );
};

export default GlobalBoard;
