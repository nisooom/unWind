"use client";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";
import Timer from "@/components/Timer";

import TaskCard from "@/components/TaskCard";
import { AnimatePresence, motion } from "framer-motion";

import { SessionProvider } from "next-auth/react";
const page = ({ session }) => {
  const [time, setTime] = useState(0);
  const [taskData, setTaskData] = useState([
    {
      id: 1,
      title: "Math assignment",
      description: "Complete maths assignment by 8",
      checked: false,
      date: "2024-02-11",
    },
    {
      id: 2,
      title: "Wash the dishes",
      description: "Finish backlog of dishes",
      checked: false,
      date: "2024-02-11",
    },
    {
      id: 3,
      title: "Continue Programming",
      description: "Udemy JavaScript course",
      checked: false,
      date: "2024-01-13",
    },
    {
      id: 4,
      title: "Go for hiking",
      description: "Get set for the Tally-hills hike coming up",
      checked: false,
      date: "2024-03-18",
    },
  ]);

  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  // Filter tasks into separate arrays
  const todaysTasks = taskData.filter((task) => task.date === today);
  const futureTasks = taskData.filter((task) => task.date > today);
  const pastTasks = taskData.filter((task) => task.date < today);

  // Sort each category array
  const sortedTodaysTasks = [...todaysTasks].sort(
    (a, b) => a.checked - b.checked
  );
  const sortedFutureTasks = [...futureTasks].sort(
    (a, b) => a.checked - b.checked
  );
  const sortedPastTasks = [...pastTasks].sort((a, b) => a.checked - b.checked);

  return (
    <div className="justify-center items-center">
      <SessionProvider session={session}></SessionProvider>
      <div className="flex justify-center items-center text-white pt-32">
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

      </div>

        

    </div>

    <div className="text-text px-4 py-4 justify-center items-center flex-col">
      {/* past task */}
      <div className="text-text text-lg ">Past</div>
      <div className="flex flex-col gap-3">
        <AnimatePresence>
          {sortedPastTasks.map((task) => (
            <motion.div
              key={task.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TaskCard
                id={task.id}
                title={task.title}
                description={task.description}
                checked={task.checked}
                setTaskData={setTaskData}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* today's task */}
      <div className="text-text text-lg font-semibold">Today</div>
      <div className="flex flex-col gap-3">
        <AnimatePresence>
          {sortedTodaysTasks.map((task) => (
            <motion.div
              key={task.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TaskCard
                id={task.id}
                title={task.title}
                description={task.description}
                checked={task.checked}
                setTaskData={setTaskData}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* future task */}
      <div className="text-text text-lg font-semibold">Future</div>
      <div className="flex flex-col gap-3">
        <AnimatePresence>
          {sortedFutureTasks.map((task) => (
            <motion.div
              key={task.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TaskCard
                id={task.id}
                title={task.title}
                description={task.description}
                checked={task.checked}
                setTaskData={setTaskData}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* {JSON.stringify(taskData)} */}
    </div>

    </div>
  );
};

export default page;
