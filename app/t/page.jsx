"use client";
import React, { useState } from "react";
import Timer from "@/components/Timer";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const page = () => {
  const [time, setTime] = useState(0);
  return (
    <div className="flex justify-center items-center text-white pt-20">
      <Timer time={time} type="classic" mood="angry" />

      <div className="flex flex-col w-32 justify-center items-center gap-2">
        <button onClick={() =>{
          setTime(300);
        }} className="w-3/4 h-12 bg-util bg-opacity-10 border-util rounded-lg"
        >5 Minutes
        </button>

        <button onClick={() =>{
        setTime(900);
        }} className="w-full h-14 bg-util bg-opacity-10 border-util rounded-lg"
        >15 Minutes
        </button>

        <button onClick={() =>{
        setTime(600);
        }} className="w-3/4 h-12 bg-util bg-opacity-10 border-util rounded-lg"
        >10 Minutes
        </button>

        {/* <Select>
          <SelectTrigger className="border-0 h-8 w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select> */}

      

      </div>



    </div>
  );
};

export default page;
