"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MoodContext } from "@/app/context/mood";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const Mood = () => {
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
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function runOncePerDay() {
      const lastRun = localStorage.getItem("lastRun");
      const today = new Date().toISOString().split("T")[0];

      if (lastRun !== today) {
        // Run your function here
        console.log("This function runs once per day");
        setTimeout(() => {
          setOpen(true);
        }, 1000);
        // Update the last run date
        localStorage.setItem("lastRun", today);
      }
    }
    // Call this function when the component mounts
    runOncePerDay();
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }, []);
  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
      }}
      className="text-text"
    >
      <DialogContent className="text-text">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          {/* button to save */}
          <Button
            onClick={() => setOpen(false)}
            className="bg-util bg-opacity-20"
          >
            Save
          </Button>
        </DialogHeader>
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
      </DialogContent>
    </Dialog>
  );
};

export default Mood;
