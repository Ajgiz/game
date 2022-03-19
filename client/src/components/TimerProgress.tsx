import React from "react";
import "../styles/timer-progress.scss";

interface TimerProgressProps {
  time: number;
  timer: number | string;
}
export const TimerProgress: React.FC<TimerProgressProps> = ({
  time,
  timer,
}) => {
  return (
    <div className="progress">
      <div
        style={{ width: `${(100 / +timer) * time}%` }}
        className="progress__line"
      ></div>
    </div>
  );
};
