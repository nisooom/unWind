import { useContext } from "react";
import { CoinsContext } from "../context/coins";
import { getUserCoins, updateCoins } from "@/db/updateCoins";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export function useCoins() {
  const { coins, setCoins } = useContext(CoinsContext);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  const [email, setEmail] = useState("");
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setEmail(session.user.email);
      
      async () => {
        const userCoins = await getUserCoins(email);
        setCoins(userCoins);
      }
    }
  }, [session, isMounted]);

  


  function getCoins() {
    return coins;
  }

  async function addCoins(coinsToBeAdded) {
    await updateCoins(email, coinsToBeAdded, 1);
    setCoins(coins + coinsToBeAdded);
    console.log(getUserCoins(email));
  }

  async function removeCoins(coinsToBeRemoved) {
    const res = await updateCoins(email, coinsToBeRemoved, 0);
    setCoins(coins - coinsToBeRemoved);
    console.log(res);
    console.log(getUserCoins(email));
    
  }

  return { getCoins, addCoins, removeCoins };
}
