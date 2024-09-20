import { useState } from "react";

const initailGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard]  = useState(initailGameBoard)
  return (
    <ol id="game-board">
      {initailGameBoard?.map((row, rowIndex) => (
        <ol key={rowIndex}>
          {row.map((playerSymbol, colIndex) => (
            <li key={colIndex}>
              <button>{playerSymbol}</button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
}
