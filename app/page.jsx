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
      id: 4,
      title: "Go for hiking",
      description: "Get set for the Tally-hills hike coming up",
      checked: false,
      date: "2024-03-18",
    },

  
    {
      id: 6,
      title: "Study for upcoming exams",
      description: "Review notes and practice sample questions for better preparation",
      checked: false,
      date: "2024-03-10"
    },
    {
      id: 7,
      title: "Buy groceries",
      description: "Stock up on essentials including milk, bread, and fruits",
      checked: false,
      date: "2024-02-15"
    },
    {
      id: 8,
      title: "Meeting with client",
      description: "Discuss project requirements and deliverables",
      checked: false,
      date: "2023-11-20"
    },
    {
      id: 9,
      title: "Family dinner",
      description: "Gather with family members for a dinner party",
      checked: false,
      date: "2022-09-05"
    },
    {
      id: 10,
      title: "Attend webinar on AI",
      description: "Learn about the latest advancements in artificial intelligence",
      checked: false,
      date: "2024-07-15"
    },
    {
      id: 11,
      title: "Visit dentist",
      description: "Routine dental check-up at 10 AM",
      checked: false,
      date: "2023-04-30"
    }
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
    <div className="justify-center items-center w-full h-full">
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

    <div className="text-text px-4 py-4 justify-center w-full items-center  flex gap-10 min-h-96 pt-20">
      {/* past task */}
      <div className="flex-col flex min-h-96">
      <div className="text-text text-lg w-full justify-center items-center flex flex-col">Past</div>
      <div className="flex flex-col gap-3 w-full justify-center items-center">
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
      </div>
      {/* today's task */}
      <div className="flex-col flex min-h-96">
      <div className="text-text text-lg w-full font-semibold justify-center items-center flex flex-col">Today</div>
      <div className="flex flex-col gap-3 w-full justify-center items-center ">
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
      </div>
      {/* future task */}
      <div className="flex flex-col  min-h-96">
      <div className="text-text text-lg w-full font-semibold justify-center items-center flex">Future</div>
      <div className="flex flex-col gap-3 w-full justify-center items-center ">
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
      </div>
      {/* {JSON.stringify(taskData)} */}
    </div>

    </div>
  );
};

export default page;
