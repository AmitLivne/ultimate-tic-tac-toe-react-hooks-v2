import { React, useState, useEffect } from "react";
import GlobalBoard from "./GlobalBoard";
import Settings from "./Settings";
import Modal from "../UI/Modal";
import {
  CreateMatrix,
  CreateWinningPatterns,
  CreateHighScores
} from "../../Utils/Utils";
const winningPatterns = CreateWinningPatterns();
const highScoresBoard = CreateHighScores();

const Game = props => {
  const initializedBoard = Array(Math.pow(props.size, 2)).fill(
    Array(Math.pow(props.size, 2)).fill(null)
  );
  const boardIdxsArray = [...Array(Math.pow(props.size, 2)).keys()];
  const [board, setBoard] = useState(initializedBoard);
  const [player, setPlayer] = useState("X");
  const [clickedBoards, setClickedBoards] = useState(null);
  const [playableBoards, setPlayableBoards] = useState(boardIdxsArray);
  const [unfilledBoards, setUnfilledBoards] = useState(boardIdxsArray);
  const [wonBoards, setWonBoards] = useState([]);
  const [modal, setModal] = useState(null);
  const [movesCount, setMovesCount] = useState({ X: 0, O: 0 });
  const [highScores, setHighScores] = useState(highScoresBoard);

  useEffect(() => {
    if (clickedBoards) {
      if (checkLocalWin(clickedBoards[0])) {
        if (unfilledBoards.length === 1) {
          setDraw();
        } else {
          return;
        }
      }
      if (unfilledBoards.length === 1 && isLocalBoardFull(clickedBoards[0])) {
        setDraw();
      }
      setAvailableBoards();
    }
    // eslint-disable-next-line
  }, [board]);

  useEffect(() => {
    if (wonBoards.length > 2) {
      if (checkGlobalWin()) {
        return;
      }
    }
    if (wonBoards.length > 0) {
      setAvailableBoards();
    }
    // eslint-disable-next-line
  }, [wonBoards]); 

  useEffect(() => {
    setLocalStorageHighScores();
    if (modal) {
      setModal({
        type: "hs",
        isNewGame: true,
        header: "highScores",
        body: highScores
      });
    }
    // eslint-disable-next-line
  }, [highScores]);

  const handleClick = (globalSqIdx, localSqIdx) => {
    setClickedBoards([globalSqIdx, localSqIdx]);
    setMovesCount(prevMoveCount => {
      const obj = { ...prevMoveCount };
      obj[player]++;
      return obj;
    });

    setBoard(
      board.map((globalSquare, globalSquareIdx) => {
        return globalSquare.map((localSquare, localSquareIdx) => {
          if (
            globalSquareIdx === globalSqIdx &&
            localSqIdx === localSquareIdx &&
            localSquare === null
          ) {
            return player;
          }
          return localSquare;
        });
      })
    );
  };
  const checkLocalWin = globalSqIdx => {
    let isWinningPattern = false;
    winningPatterns.forEach(pattern => {
      if (pattern.every(idx => board[globalSqIdx][idx] === player)) {
        isWinningPattern = true;
      }
    });
    if (isWinningPattern) {
      setWonBoards([...wonBoards, { idx: clickedBoards[0], player }]);
    }
    return isWinningPattern;
  };
  const checkGlobalWin = () => {
    let isWinningPattern = false;
    winningPatterns.forEach(pattern => {
      if (
        pattern.every(idx =>
          wonBoards.some(board => {
            return board.idx === idx && board.player === player;
          })
        )
      ) {
        isWinningPattern = true;
      }
    });
    if (isWinningPattern) setWin();
    return isWinningPattern;
  };

  const setAvailableBoards = () => {
    let availableIdxs = [...unfilledBoards];
    if (isLocalBoardFull(clickedBoards[0])) {
      availableIdxs = availableIdxs.filter(aIdx => {
        return clickedBoards[0] !== aIdx;
      });
      updateBoardState(availableIdxs);
    }

    if (isGlobalBoardWon(clickedBoards[1])) {
      availableIdxs = availableIdxs.filter(idx => {
        return wonBoards.every(winnerBoard => {
          return winnerBoard.idx !== idx;
        });
      });
      updateBoardState(availableIdxs);
    } else {
      availableIdxs = !availableIdxs.includes(clickedBoards[1])
        ? availableIdxs
        : [clickedBoards[1]];
      setPlayableBoards(availableIdxs);
    }
    setPlayer(player === "X" ? "O" : "X");
  };
  const updateBoardState = idxs => {
    setUnfilledBoards(idxs);
    setPlayableBoards(idxs);
  };

  const isLocalBoardFull = localSqIdx => {
    return board[localSqIdx].every(localSqValue => localSqValue !== null);
  };
  const isGlobalBoardWon = idx => {
    return wonBoards.some(board => board.idx === idx);
  };
  const globalBoard = globalSquareIdx => {
    return (
      <GlobalBoard
        key={globalSquareIdx}
        size={props.size}
        localBoards={board[globalSquareIdx]}
        isWon={wonBoards.filter(board => board.idx === globalSquareIdx)}
        isClickable={playableBoards.includes(globalSquareIdx)}
        onClick={localSquareIdx => handleClick(globalSquareIdx, localSquareIdx)}
      />
    );
  };
  const setDraw = () => {
    setTimeout(() => {
      setModal({
        type: "d",
        header: "It's a Draw!",
        body: "Better luck next time..."
      });
    }, 400) 
  };
  const setWin = () => {
    setTimeout(() => {
      setModal({
        type: "w",
        header: `Congrats! Player ${player} won!`,
        score: movesCount[`${player}`]
      })
    }, 400)    
  };
  const showHighScores = () => {
    setModal({
      type: "hs",
      header: "highScores",
      body: highScores
    });
  };
  const updateHighScores = newPlayer => {
    setHighScores([...highScores, newPlayer]);
  };
  const startNewGame = () => {
    setBoard(initializedBoard);
    setPlayer("X");
    setClickedBoards(null);
    setWonBoards([]);
    setModal(null);
    setMovesCount({ X: 0, O: 0 });
    setPlayableBoards(boardIdxsArray);
    setUnfilledBoards(boardIdxsArray);
  };

  const setLocalStorageHighScores = () => {
    highScores.sort((a, b) => (a.score > b.score ? 1 : -1));
    localStorage.setItem("highScores", JSON.stringify(highScores));
  };
  const modalHandler = () => {
    setModal(null);
  };
  return (
    <>
      <Settings
        onNewGameClick={startNewGame}
        onHighScoresClick={showHighScores}
        player={player}
      />
      {CreateMatrix({
        info: { boardType: "global" },
        component: globalBoard,
        size: props.size
      })}
      {modal && (
        <Modal
          modal={modal}
          onClick={modal.isNewGame ? startNewGame : modalHandler}
          onSubmitName={player => updateHighScores(player)}
          onNewGameClick={startNewGame}
        />
      )}
    </>
  );
};

export default Game;