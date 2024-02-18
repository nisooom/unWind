import React from "react";
import { Skeleton } from "../ui/skeleton";

const SidebarSkele = () => {
  return (
    <div className="sm:block hidden text-white z-10 absolute w-56 h-full bg-background px-4 py-4 border-util border-opacity-20 border-r-[2px] overflow-y-auto">
      <div className="home font-semibold flex gap-2 items-center text-xl text-text">
        <Skeleton className="w-12 h-12 rounded-full" /> {/* Logo Skeleton */}
        <Skeleton className="w-24 h-6 rounded-lg" /> {/* Text Skeleton */}
      </div>
      <div className="flex flex-col gap-6 mt-12">
        <div className="flex gap-2 items-center">
          <Skeleton className="w-6 h-6 rounded-full" /> {/* Logo Skeleton */}
          <Skeleton className="w-3/4 px-2 py-2 rounded-lg" />{" "}
          {/* Link Skeleton */}
        </div>
        <div className="flex gap-2 items-center">
          <Skeleton className="w-6 h-6 rounded-full" /> {/* Logo Skeleton */}
          <Skeleton className="w-3/4 px-2 py-2 rounded-lg" />{" "}
          {/* Link Skeleton */}
        </div>
        <div className="flex gap-2 items-center">
          <Skeleton className="w-6 h-6 rounded-full" /> {/* Logo Skeleton */}
          <Skeleton className="w-3/4 px-2 py-2 rounded-lg" />{" "}
          {/* Link Skeleton */}
        </div>
        <Skeleton className="w-full h-10 rounded-lg mt-4" />{" "}
        {/* LoginButton Skeleton */}
      </div>
    </div>
  );
};

export default SidebarSkele;
