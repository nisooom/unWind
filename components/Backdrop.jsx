import React, { useState, useEffect } from "react";

const Backdrop = () => {
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

  const [mood, setMood] = useState(localStorage.getItem("mood") || "default");
  const [color, setColor] = useState(colors[mood]);

  // update color based on mood
  useEffect(() => {
    setColor(colors[mood]);
    localStorage.setItem("mood", mood);
  }, [mood]);

  return (
    <div className="overflow-hidden text-white sm:pl-40 w-full h-full absolute text-9xl">
      <div className="flex items-center justify-center h-full">
        <div
          style={{ backgroundColor: color }}
          className="absolute bottom-0 left-40 w-32 h-32 rounded-full opacity-100"
        ></div>
        <div
          style={{ backgroundColor: color }}
          className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-30"
        ></div>
        <div
          style={{ backgroundColor: color }}
          className="absolute top-50 flex items-center justify-center w-96 h-96 rounded-full opacity-20"
        ></div>
        <div className="absolute backdrop-blur-3xl w-full h-full"></div>
      </div>
    </div>
  );
};

export default Backdrop;
