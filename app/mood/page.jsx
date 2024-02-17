"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MoodContext } from "../context/mood";

const MoodChanger = () => {
  const { mood, setMood } = React.useContext(MoodContext);
  const moods = [
    "default",
    "sorrow",
    "grateful",
    "jealous",
    "anxious",
    "neutral",
    "happy",
    "anger",
  ];

  const clearLocalStorage = () => {
    localStorage.removeItem("lastRun");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="mb-10 text-3xl font-bold text-text">Change Mood</h1>
      <div className="grid grid-cols-2 gap-4">
        {moods.map((mood, index) => (
          <Button
            key={index}
            onClick={() => setMood(mood)}
            className="px-4 py-2 font-bold text-white bg-background bg-opacity-50 border-util border-[1px] border-opacity-25 rounded hover:bg-background hover:bg-opacity-80 transition-all"
          >
            {mood}
          </Button>
        ))}
      </div>
      <Button
        onClick={clearLocalStorage}
        className="mt-4 px-4 py-2 font-bold text-white bg-background bg-opacity-50 border-util border-[1px] border-opacity-25 rounded hover:bg-background hover:bg-opacity-80 transition-all"
      >
        Clear Local Storage
      </Button>
    </div>
  );
};

export default MoodChanger;
