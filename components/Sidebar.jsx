import React from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="z-10 absolute w-40 h-full bg-blue-400 px-2 py-2">
      <div className="home font-semibold flex gap-2 items-center text-xl">
        <Image src="/logos/icon.png" alt="logo" width={50} height={50} />
        UnWind
      </div>
    </div>
  );
};

export default Sidebar;
