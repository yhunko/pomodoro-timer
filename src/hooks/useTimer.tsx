import { useState } from "react";
import { useInterval } from "react-use";

const useTimer = () => {
  const [time, setTime] = useState<number | null>(null);
  const [initialTime, setInitialTime] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useInterval(
    () => {
      setTime((prev) => {
        if (prev === 0) {
          setInitialTime(null);
          return null;
        }

        return prev === null ? null : prev - 1;
      });
    },
    isPaused ? null : 1000
  );

  return {
    time,
    isPaused,
    start(startTime: number) {
      setTime(startTime);
      setInitialTime(startTime);
    },
    pause() {
      setIsPaused(true);
    },
  };
};

export default useTimer;
