"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import TimerSkeleton from "@/components/skeletons/TimerSkeleton";
// import Timer from "@/components/Timer";
const Timer = dynamic(() => import("@/components/Timer"), {
  loading: () => <TimerSkeleton />,
  ssr: false,
});

import TimeSet from "@/components/TimeSet";

import TaskCard from "@/components/TaskCard";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { getUserTasks } from "@/db/user";
const page = () => {
  const [time, setTime] = useState(0);
  const [timerData, setTimerData] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [taskData, setTaskData] = useState([]);
  const [quote, setQuote] = useState({
    text: "I'm the second-worst thing to ever happen to those orphans",
    author: "Technoblade",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setTime(300);
    }
  }, [isMounted]);

  useEffect(() => {
    if (timerData && timerData !== "00:05:00") {
      const [hours, minutes, seconds] = timerData.split(":").map(Number);
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;
      setTime(totalSeconds);
    }
  }, [timerData]);

  const [email, setEmail] = useState("");
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setEmail(session.user.email);
      console.log("Email", email);
    }
  }, [session, isMounted]);

  const [isLoading, setIsLoading] = useState(true); // Add this line

  const getTasks = async () => {
    setIsLoading(true); // Set loading to true before fetching tasks
    const tasks = await getUserTasks(email);
    console.log("Task Data", tasks);
    setTaskData(tasks);
    setIsLoading(false); // Set loading to false after fetching tasks
  };
  useEffect(() => {
    if (!email) return;
    getTasks();
  }, [email]);

  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  // Filter tasks into separate arrays

  const todaysTasks = taskData.filter(
    (task) => task.due_date?.split("T")[0] === today
  );

  const sortedTodaysTasks = [...todaysTasks].sort(
    (a, b) => a.status - b.status
  );

  return (
    <div
      className="justify-center items-center w-full h-full flex flex-col"
      style={{ overflow: "auto" }}
    >
      <div
        className="w-full h-full justify-center items-center"
        style={{
          maxHeight: "64rem",
          maxWidth: "108rem",
        }}
      >
        <div
          className="flex flex-col md:flex-row justify-center items-center text-white h-full md:h-1/2 w-full py-10 px-12"
          style={{
            minHeight: "385px",
          }}
        >
          <Timer
            time={time}
            type="classic"
            mood="angry"
            className=" bg-red-400"
            setIsRunning={setIsRunning}
          />

          <div className="w-2/3 md:h-full h-full flex flex-col justify-start md:justify-center items-center gap-8 px-2 py-2 ">
            <TimeSet setTimerData={setTimerData} />
            <div className="flex flex-col gap-4 w-full items-center">
              <button
                onClick={() => {
                  setTime(900);
                }}
                className="w-2/3 text-sm h-8 bg-util bg-opacity-0 hover:bg-opacity-10 transition-all border-util border-opacity-20 border-[1px] rounded-md py-1"
              >
                00:15:00
              </button>
              <button
                onClick={() => {
                  setTime(1800);
                }}
                className="w-2/3 text-sm h-8 bg-util bg-opacity-0 hover:bg-opacity-10 transition-all border-util border-opacity-20 border-[1px] rounded-md py-1"
              >
                00:30:00
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-full h-1/3 hidden md:flex text-text px-4 py-4 justify-center w-full items-center flex"
          style={{ flexShrink: 0 }}
        >
          <div className="w-1/3 h-full ">
            <div className="flex-col w-full flex px-4">
              <div className="text-text text-lg w-full font-semibold justify-start items-center flex flex-col px-2 py-4">
                <span className="w-full flex justify-start"> Today</span>
              </div>
              <div className="flex flex-col gap-3 w-full justify-start items-start ">
                <AnimatePresence>
                  {sortedTodaysTasks.map((task) => (
                    <motion.div
                      key={task.$id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <TaskCard
                        id={task.$id}
                        title={task.task_name}
                        description={task.content}
                        checked={task.status}
                        setTaskData={setTaskData}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="w-2/3 h-full px-4 py-4 justify-start items-center flex flex-col">
            <div className="w-2/3 bg-util bg-opacity-15 px-4 py-4 rounded-md flex flex-col gap-2">
              <span className="font-medium lg:text-xl text-lg transition-all">
                {quote.text}
              </span>
              <span className="text-lg opacity-75 px-4 w-full justify-end flex">
                - {quote.author}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <Coins */}
    </div>
  );
};

export default page;
