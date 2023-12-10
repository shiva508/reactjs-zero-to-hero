const GameBoard = ({ onSelectBox, board }) => {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // const onSelectBoxHandler = (rowIndex, colIndex) => {
  //   console.log(rowIndex, colIndex);
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedGameBoard[rowIndex][colIndex] = selectedPlayer;
  //     return updatedGameBoard;
  //   });
  //   onSelectBox();
  // };

  return (
    <ol id="game-board">
      {board.map((rows, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {rows.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectBox(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
export default GameBoard;
