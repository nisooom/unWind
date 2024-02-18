"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MoodContext } from "@/app/context/mood";
import Image from "next/image";
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
    "happy",
    "anger",
    "neutral",
  ];
  const moodClasses = {
    default: "bg-accent",
    sorrow: "bg-sorrow_accent",
    grateful: "bg-grateful_accent",
    jealous: "bg-jealous_accent",
    anxious: "bg-anxious_accent",
    neutral: "bg-neutral_accent",
    happy: "bg-happy_accent",
    anger: "bg-anger_accent",
  };
  const borderClasses = {
    default: "border-accent",
    sorrow: "border-sorrow_accent",
    grateful: "border-grateful_accent",
    jealous: "border-jealous_accent",
    anxious: "border-anxious_accent",
    neutral: "border-neutral_accent",
    happy: "border-happy_accent",
    anger: "border-anger_accent",
  };

  const hoverClasses = {
    default: "hover:bg-accent",
    sorrow: "hover:bg-sorrow_accent",
    grateful: "hover:bg-grateful_accent",
    jealous: "hover:bg-jealous_accent",
    anxious: "hover:bg-anxious_accent",
    neutral: "hover:bg-neutral_accent",
    happy: "hover:bg-happy_accent",
    anger: "hover:bg-anger_accent",
  };

  const emojiLink = {
    default: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f633/512",
    happy: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/512",
    sorrow: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f979/512",
    grateful: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f917/512",
    jealous: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f928/512",
    anxious: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f630/512",
    neutral: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f610/512",
    anger: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f621/512",
  };

  const [open, setOpen] = useState(false);
  useEffect(() => {
    function runOncePerDay() {
      const lastRun = localStorage.getItem("lastRun");
      const today = new Date().toISOString().split("T")[0];

      if (lastRun !== today) {
        // Run your function here
        console.log("This function runs once per day");
        localStorage.setItem("mood", "default");
        setTimeout(() => {
          setOpen(true);
        }, 1000);
        // Update the last run date
        localStorage.setItem("lastRun", today);
      }
    }
    // Call this function when the component mounts
    runOncePerDay();
  }, []);

  const handleChangeMood = (mood) => {
    setMood(mood);
    // setLocalStorage
    localStorage.setItem("mood", mood);
    // setOpen(false);
  };
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
          <DialogTitle className="w-full text-center">
            How are you feeling today?
          </DialogTitle>
        </DialogHeader>
        <div
          className={`text-3xl font-bold text-text w-full items-center flex flex-col gap-3 px-2 py-4 ${moodClasses[mood]} bg-opacity-15 ${borderClasses[mood]} border-[2px] border-opacity-25 rounded-lg transition-all`}
        >
          <picture>
            <source srcSet={`${emojiLink[mood]}.webp`} type="image/webp" />
            <Image
              src={`${emojiLink[mood]}.gif`}
              alt="😀"
              className="w-16 h-16 sm:w-24 sm:h-24 transition-all"
              width="96"
              height="96"
            />
          </picture>
          {mood === "default" ? "Select a mood" : mood}
        </div>
        <div className="grid grid-cols-2 gap-4 align-items-center">
          {moods
            .filter((moodIndex) => moodIndex !== "default")
            .map((moodIndex, index) => (
              <Button
                key={index}
                onClick={() => handleChangeMood(moodIndex)}
                className={`${
                  hoverClasses[moodIndex]
                } px-4 py-2 font-bold text-white bg-background bg-opacity-50 border-util border-[1px] border-opacity-25 rounded hover:bg-opacity-10 transition-all ${
                  moodIndex === mood
                    ? `${moodClasses[mood]} bg-opacity-100 text-black hover:bg-opacity-100`
                    : ""
                } ${
                  index === moods.length - 2 ? "col-span-2" : "" // Make the second-to-last element full width
                }`}
              >
                {moodIndex}
              </Button>
            ))}
        </div>

        {/* skip button */}
        <DialogDescription className="text-center flex justify-center space-x-6 mt-4">
          <DialogTrigger
            className="text-lg text-text bg-util bg-opacity-10 hover:bg-opacity-15 transition-all w-1/2 px-2 py-2 rounded-md hover:text-text hover:text-opacity-85 cursor-pointer font-semibold"
            onClick={() => handleChangeMood("default")}
          >
            {mood !== "default" ? "Next" : "Skip"}
          </DialogTrigger>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default Mood;
