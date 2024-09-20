import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  return (
    <main >
      <div id="game-container">
        <ol id="players">
          <Player initailName="Player 1" symbol='X' />
          <Player initailName="Player 2" symbol='0' />
        </ol>
      <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
