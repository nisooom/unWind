"use client";

import React, { useContext, useEffect, useState } from "react";
import { CoinsContext } from "@/app/context/coins";
import { AnimatePresence, motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { getUserCoins} from "@/db/updateCoins";
import { useSession } from "next-auth/react";

const Coins = () => {
  const { coins, setCoins } = useContext(CoinsContext);
  const [displayedCoins, setDisplayedCoins] = useState(0);

  


  useEffect(() => {
    const interval = setInterval(() => {
      if (displayedCoins < coins) {
        setDisplayedCoins(displayedCoins + 1);
      } else if (displayedCoins > coins) {
        setDisplayedCoins(displayedCoins - 1);
      }
    }, 10); // adjust time here

    return () => clearInterval(interval);
  }, [coins, displayedCoins]);

  const coinVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    } else {
      return num;
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <div className="absolute z-50 w-auto h-10 flex absolute right-4 top-4 padding-10 px-2 border-accent border border-opacity-30 rounded-lg gap-1 flex items-center justify-center">
          <TooltipTrigger className="flex">
            <span className="text-white flex justify-center items-center">
              🍀
            </span>
            <AnimatePresence>
              <motion.span
                className="min-w-10 text-white flex justify-center items-center"
                variants={coinVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {formatNumber(displayedCoins)}
              </motion.span>
            </AnimatePresence>
          </TooltipTrigger>
        </div>

        <TooltipContent className="mt-4 mr-3 border-util border-opacity-25">
          <div className="flex py-1 gap-2 px-2 flex">
            <span className="text-white text-xs">Coins</span>
            <span className="text-white text-xs">{displayedCoins}</span>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Coins;
