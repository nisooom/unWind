"use client";
import React from "react";
import { useState, useEffect } from "react";
const Coins = () => {
  const [coins, setCoins] = useState(10);
// fetch 
  return (
    <div className="w-32 h-10 flex absolute right-4 top-4 padding-10 border-accent border border-opacity-30 rounded-lg">
      <span className="text-white flex justify-center items-center pl-2 gap-2">
        🍀 <span>{coins}</span>
      </span>
    </div>
  );
};

export default Coins;
