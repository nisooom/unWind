"use client";
import { useState } from "react";

import TimeSet from "@/components/TimeSet";
const page = () => {
  const [setTimerData, setSetTimerData] = useState("");
  return (
    <div className="w-full h-full text-text flex flex-col">
      <TimeSet setTimerData={setSetTimerData} />
      <div className="text-4xl font-bold">{setTimerData}</div>
    </div>
  );
};

export default page;
