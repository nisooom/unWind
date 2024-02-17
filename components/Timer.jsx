// Importing necessary React modules
"use client";
import { useCoins } from "@/app/hooks/coins";
import { useContext } from "react";
import PlayIcon from "@/components/PlayIcon";
import React, { useState, useEffect, useCallback } from "react";
import PauseIcon from "@/components/PauseIcon";
import { CircularProgressbar } from "react-circular-progressbar";
import ResetIcon from "./ResetIcon";
import { MoodContext } from "@/app/context/mood";

// Functional component Timer
const Timer = ({ time }) => {
  const { mood, setMood } = useContext(MoodContext);
  const colors = {
    default: "#86e8fb",
    sorrow: "#185ABE",
    grateful: "#FF2674",
    jealous: "#019701",
    anxious: "#654597",
    neutral: "#10992E",
    happy: "#E75707",
    anger: "#FF003D",
  };
  const { addCoins } = useCoins();
  const [timeLeft, setTimeLeft] = useState(time);
  const [totalTime, setTotalTime] = useState(time);
  const [isRunning, setIsRunning] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(() => {
    if (typeof window !== "undefined") {
      // Get hasCompleted from localStorage
      const saved = window.localStorage.getItem("hasCompleted");
      const initialValue = JSON.parse(saved);
      return initialValue || false;
    }
    return false;
  });

  const onTimerComplete = useCallback(() => {
    if (hasCompleted) {
      return;
    }
    let coins = Math.round(totalTime / 20); // Calculate coins based on session time
    coins = Math.round(coins / 5) * 5; // Round to nearest 5
    setTimeout(() => addCoins(10), 0); // Delay state update
    console.log("Timer completed", coins);
    setHasCompleted(true); // Set hasCompleted to true
    setTimeLeft(time); // Reset timeLeft
    setTotalTime(time); // Reset totalTime
    setIsRunning(false); // Stop the timer
  }, [hasCompleted, time]);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (typeof prevTime === "number" && prevTime > 0) {
            return prevTime - 1;
          } else {
            onTimerComplete();
            return 0; // return 0 instead of NaN
          }
        });
      }, 1000);
    } else if (!isRunning && timeLeft !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, onTimerComplete]); // remove hasCompleted from dependencies

  useEffect(() => {
    if (typeof time === "number") {
      setTimeLeft(time);
      setTotalTime(time);
      setIsRunning(false);
      setHasCompleted(false); // Reset hasCompleted to false
    }
  }, [time]);

  const percentage = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <div className="text-white flex flex-col items-center justify-center h-2/3 md:h-full w-1/3">
      <div className=" aspect-square text-white flex items-center justify-center h-full relative">
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
                stroke: colors[mood] || colors.default, // Use the color corresponding to the current mood, or the default color if the mood is not defined
                strokeLinecap: "round",
                transition: "stroke-dashoffset 0.5s ease 0s",
              },
              text: {
                fill: "transparent",
              },
            }}
          />
        </div>

        <div className="absolute text-center w-2/3 h-2/3 justify-center items-center rounded-full flex bg-opacity-20 bg-util -z-10">
          <p className="text-2xl text-white z-20">
            {/* time elapsed in m and s*/}
            {Math.floor(timeLeft / 60)}:
            {timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
          </p>
        </div>
      </div>
      <div className="  w-full flex justify-center items-center p-4 gap-4">
        <button
          onClick={() => {
            setIsRunning(!isRunning);
            if (!isRunning) {
              setHasCompleted(false);
            }
          }}
          className="p-2 hover:bg-util hover:bg-opacity-20 hover:rounded-full"
        >
          {isRunning ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button
          className="p-2 hover:bg-util hover:bg-opacity-20 hover:rounded-full"
          onClick={() => {
            setTotalTime(time);
            setTimeLeft(time);
            setIsRunning(false);
            setHasCompleted(false);
          }}
        >
          <ResetIcon />
        </button>
      </div>
    </div>
  );
};

// Export the Timer component
export default Timer;
