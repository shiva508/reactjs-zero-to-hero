import "./App.css";
import Player from "./components/Player";
import TimerCahllenge from "./components/TimerCahllenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerCahllenge title="learn React" targetTime="1"></TimerCahllenge>
        <TimerCahllenge title="learn fd" targetTime="1"></TimerCahllenge>
        <TimerCahllenge title="learn dsa" targetTime="1"></TimerCahllenge>
        <TimerCahllenge title="learn jhh" targetTime="1"></TimerCahllenge>
        <TimerCahllenge title="learn nvccff" targetTime="1"></TimerCahllenge>
      </div>
    </>
  );
}

export default App;
