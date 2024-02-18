import React from "react";
import { Skeleton } from "../ui/skeleton";

const TimerSkeleton = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center h-2/3 md:h-full w-1/3">
      <div className="aspect-square text-white flex items-center justify-center h-full relative">
        <div className="w-2/3 h-2/3">
          <Skeleton circle height={200} width={200} />
        </div>
        <div className="absolute text-center w-2/3 h-2/3 justify-center items-center rounded-full flex bg-opacity-20 bg-util -z-10">
          <Skeleton height={50} width={50} />
        </div>
      </div>
      <div className="w-full flex justify-center items-center p-4 gap-4">
        <Skeleton circle height={50} width={50} />
        <Skeleton circle height={50} width={50} />
      </div>
    </div>
  );
};

export default TimerSkeleton;
