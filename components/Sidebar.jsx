import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="text white z-10 absolute w-56 h-full bg-background px-4 py-2 border-util border-opacity-20 border-r-[2px]">
      <div className="home font-semibold flex gap-2 items-center text-xl text-text">
        <Image src="/logos/icon.png" alt="logo" width={50} height={50} />
        UnWind
      </div>
      {/* list of all links with logos */}
      <div className="flex flex-col gap-4 mt-8">
        <Link
          href="/tasks"
          className="round w-full bg-transparent px-2 py-2 rounded-lg hover:bg-util hover:bg-opacity-10 transition-all duration-300 ease-in-out"
        >
          <span className="flex gap-2 items-center text-text text-lg">
            <Image src="/logos/icon.png" alt="logo" width={24} height={24} />
            Task List
          </span>
        </Link>
        <Link
          href="/calendar"
          className="round w-full bg-transparent px-2 py-2 rounded-lg hover:bg-util hover:bg-opacity-10 transition-all duration-300 ease-in-out"
        >
          <span className="flex gap-2 items-center text-text text-lg">
            <Image src="/logos/icon.png" alt="logo" width={24} height={24} />
            Calendar
          </span>
        </Link>
        <Link
          href="/store"
          className="round w-full bg-transparent px-2 py-2 rounded-lg hover:bg-util hover:bg-opacity-10 transition-all duration-300 ease-in-out"
        >
          <span className="flex gap-2 items-center text-text text-lg">
            <Image src="/logos/icon.png" alt="logo" width={24} height={24} />
            Store
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
