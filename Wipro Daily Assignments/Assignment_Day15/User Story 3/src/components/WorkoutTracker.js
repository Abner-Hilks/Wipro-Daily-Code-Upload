import React, { useState, useEffect } from "react";
import { useTimer } from "../hooks/useTimer";

export default function WorkoutTracker() {
  const [setCount, setSetCount] = useState(1);
  const restTime = 10; // fixed 10 seconds rest
// rest between sets in seconds

  const { time, start, stop, reset, isRunning } = useTimer(0, false);

  // Auto-reset timer logic after rest time
  useEffect(() => {
    if (time >= restTime && isRunning) {
      stop();
      setTimeout(() => {
        reset();
        setSetCount((prev) => prev + 1);
      }, 1000); // 1 sec pause before next set
    }
  }, [time, restTime, isRunning, stop, reset]);

  return (
    <div className="tracker-container">
      <h1>🏋️ Workout Tracker</h1>

      <div className="set-info">
        <h2>Current Set: {setCount}</h2>
        <p>Rest Time: {restTime} sec</p>
      </div>

      <div className="timer">
        <h3>Timer: {time}s</h3>
      </div>

      <div className="controls">
        {!isRunning && (
          <button className="start" onClick={start}>
            ▶️ Start
          </button>
        )}
        {isRunning && (
          <button className="stop" onClick={stop}>
            ⏸️ Stop
          </button>
        )}
        <button className="reset" onClick={reset}>
          🔄 Reset
        </button>
      </div>
    </div>
  );
}
