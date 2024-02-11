// Importing necessary React modules
"use client";
import PlayIcon from "@/components/PlayIcon";
import React, { useState, useEffect } from "react";
import PauseIcon from "@/components/PauseIcon"
import { CircularProgressbar } from "react-circular-progressbar";
// Functional component Timer
const Timer = ({ time }) => {
  const [timeLeft, setTimeLeft] = useState(time);
  const [totalTime, setTotalTime] = useState(time);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else if (!isRunning && timeLeft !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);
  
  useEffect(() => {
    setTimeLeft(time);
    setTotalTime(time);
    setIsRunning(true)
  }, [time])

  const percentage = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <div className="text-white flex flex-col items-center justify-center h-full">
      <div className="text-white flex items-center justify-center h-full relative">
        <div className="w-2/3 h-2/3">
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

        <div className="absolute text-center w-2/3 h-full justify-center items-center rounded-full flex bg-opacity-20 bg-util -z-10">
          <p className="text-2xl text-white z-20">
            {/* time elapsed in m and s*/}
            {Math.floor(timeLeft / 60)}:
            {timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center pt-4">
        <button onClick={() => setIsRunning(!isRunning)} className="">
          {isRunning ? <PauseIcon/>:<PlayIcon/>}
        </button>
        <button className="pl-4" onClick={() => {
          setTotalTime(time);
          setTimeLeft(time);
          setIsRunning(false);
        }}>Reset</button>
      </div>
      
    </div>

    
  );
};

// Export the Timer component
export default Timer;
