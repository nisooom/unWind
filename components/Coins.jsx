"use client";

import React, { useEffect } from "react";
import { useCoins } from "@/app/hooks/coins";

const Coins = () => {
  const { coins, addCoins } = useCoins();
  useEffect(() => {
    console.log(coins);
  }, [coins]);

  return (
    <div className="w-auto h-10 flex absolute right-4 top-4 padding-10 px-2 border-accent border border-opacity-30 rounded-lg gap-1">
      <span className="text-white flex justify-center items-center">🍀</span>
      <span className="text-white flex justify-center items-center">
        {coins}
      </span>
    </div>
  );
};

export default Coins;
