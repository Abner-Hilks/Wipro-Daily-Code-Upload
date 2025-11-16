import { useState, useEffect, useRef } from "react";

/**
 * Custom hook to manage a simple timer.
 * Returns: [time, start, stop, reset]
 */
export function useTimer(initialTime = 0, autoStart = false) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(autoStart);
  const intervalRef = useRef(null);

  // Effect to handle timer updates
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    // Cleanup to stop interval when unmounted or stopped
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const start = () => setIsRunning(true);
  const stop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };
  const reset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  return { time, start, stop, reset, isRunning };
}
