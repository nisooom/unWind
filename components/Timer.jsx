// Importing necessary React modules
"use client";
import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
// Functional component Timer
const Timer = ({ time }) => {
  // State hooks for timeLeft and totalTime
  const [timeLeft, setTimeLeft] = useState(time);
  const [totalTime, setTotalTime] = useState(time);

  // useEffect to update the timeLeft every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Calculate percentage and rotation based on timeLeft and totalTime
  const percentage = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <div className="text-white flex items-center justify-center h-full">
      <div className="text-white flex items-center justify-center h-full relative">
        <div className="w-2/3 h-1/3">
          <CircularProgressbar
            value={percentage}
            text={`${timeLeft}`}
            styles={{
              root: {
                width: "100%",
                height: "100%",
              },
              path: {
                stroke: "#86e8fb",
                strokeLinecap: "round",
                transition: "stroke-dashoffset 0.5s ease 0s",
              },
              text: {
                fill: "transparent",
              },
            }}
          />
        </div>
        <div className="absolute text-center w-full">
          <p className="text-2xl">{Math.round(percentage)}%</p>
        </div>
      </div>
    </div>
  );
};

// Export the Timer component
export default Timer;
