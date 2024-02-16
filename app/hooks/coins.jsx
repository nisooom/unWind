import { useContext } from "react";
import { CoinsContext } from "../context/coins";

export function useCoins() {
  const { coins, setCoins } = useContext(CoinsContext);

  function getCoins() {
    return coins;
  }

  function addCoins(coinsToBeAdded) {
    setCoins(coins + coinsToBeAdded);
  }

  function removeCoins(coinsToBeRemoved) {
    setCoins(coins - coinsToBeRemoved);
  }

  return { getCoins, addCoins, removeCoins };
}
