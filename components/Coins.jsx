"use client";
import React from "react";
import { useState, useEffect } from "react";
const Coins = () => {
  const [coins, setCoins] = useState(10);
// fetch 
  return (
    <div className="w-auto h-10 flex absolute right-4 top-4 padding-10 px-2 border-accent border border-opacity-30 rounded-lg gap-1">
      <span className="text-white flex justify-center items-center">
      🍀
      </span>
      <span className="text-white flex justify-center items-center">{coins}</span>
    </div>
  );
};

export default Coins;
