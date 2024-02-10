// Importing necessary React modules
"use client";
import React, { useState, useEffect } from "react";

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
  const rotation = (percentage / 100) * 360;

  // Progress sector
  const progressSector = (
    <div
      className="absolute h-full w-full rounded-full bg-blue-500"
      style={{
        clipPath: "polygon(50% 50%, 100% 100%, 100% 0%)",
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "50% 50%",
      }}
    ></div>
  );

  // Progress Text
  const progressText = (
    <div className="absolute flex items-center justify-center h-full w-full">
      <span className="text-xl font-bold">{percentage.toFixed(2)}%</span>
    </div>
  );

  return (
    <div className="text-white flex items-center justify-center h-full">
      {/* Display current time, total time, and circular progress bar */}
      <div className="flex items-center justify-center h-full">
        <div className="flex items-center justify-center h-full flex-col flex">
          <h1>{timeLeft}</h1>
          <h1>{totalTime}</h1>
          <div className="relative" style={{ width: "200px", height: "200px" }}>
            {/* Outer Circle */}
            <div className="absolute bg-gray-700 h-full w-full rounded-full"></div>
            {/* Progress sector */}
            {progressSector}
            {/* Progress Text */}
            {progressText}
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Timer component
export default Timer;
