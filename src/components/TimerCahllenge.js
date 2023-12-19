import { useRef, useState } from "react";
import ResultModel from "./ResultModel";
//let timer;
const TimerCahllenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();
  const [timeStarted, setTimeStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const startTimerHandler = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, targetTime * 1000);
    setTimeStarted(true);
  };

  const stopTimerHandler = () => {
    clearTimeout(timer.current);
    setTimeStarted(false);
  };
  return (
    <>
      <ResultModel ref={dialog} targetTime={targetTime} result="lost" />

      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired ? <p>Never lost</p> : ""}
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeStarted ? stopTimerHandler : startTimerHandler}>
            {timeStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className="">{timeStarted ? "Timeer Running" : "Timer Inactive"} </p>
      </section>
    </>
  );
};
export default TimerCahllenge;
