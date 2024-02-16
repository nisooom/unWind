"use client";
import React from "react";
import { useCoins } from "../hooks/coins";
import { Button } from "@/components/ui/button";
import { CoinsContext } from "../context/coins";

const page = () => {
  const { getCoins, addCoins, removeCoins } = useCoins();
  const { coins, setCoins } = React.useContext(CoinsContext);
  return (
    <div className="text-text flex flex-col items-center justify-center space-y-4 py-8">
      {/* button to add subtract and get coins */}
      <Button
        onClick={() => addCoins(10)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add 10 coins
      </Button>
      <Button
        onClick={() => removeCoins(10)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Remove 10 coins
      </Button>
      <Button
        onClick={() => getCoins()}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Get coins
      </Button>
      <div className="">
        <span className="text-white flex justify-center items-center">🍀</span>
        <span className="text-white flex justify-center items-center">
          {coins}
        </span>
      </div>
    </div>
  );
};

export default page;
