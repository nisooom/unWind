import { useState } from "react";

export function useCoins() {
  const [coins, setCoins] = useState(100);

  function getCoins() {
    return coins;
  }

  function addCoins(coinsToBeAdded) {
    setCoins(coins + coinsToBeAdded);
  }

  function removeCoins(coinsToBeRemoved) {
    setCoins(coins - coinsToBeRemoved);
  }

  return { coins, getCoins, addCoins, removeCoins };
}