"use client";

import React, { useState, useEffect } from "react";
import Timer from "@/components/Timer";
import TimeSet from "@/components/TimeSet";

import TaskCard from "@/components/TaskCard";
import { AnimatePresence, motion } from "framer-motion";

import { SessionProvider } from "next-auth/react";
import { set } from "date-fns";
import { is } from "date-fns/locale";
const page = ({ session }) => {
  const [time, setTime] = useState(0);
  const [timerData, setTimerData] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [taskData, setTaskData] = useState([
    {
      id: 1,
      title: "Math assignment",
      description: "Complete maths assignment by 8",
      checked: false,
      date: "2024-02-14",
    },
    {
      id: 2,
      title: "Wash the dishes",
      description: "Finish backlog of dishes",
      checked: false,
      date: "2024-02-14",
    },

    {
      id: 4,
      title: "Go for hiking",
      description: "Get set for the Tally-hills hike coming up",
      checked: false,
      date: "2024-02-14",
    },

    {
      id: 6,
      title: "Study for upcoming exams",
      description:
        "Review notes and practice sample questions for better preparation",
      checked: false,
      date: "2024-03-10",
    },
    {
      id: 7,
      title: "Buy groceries",
      description: "Stock up on essentials including milk, bread, and fruits",
      checked: false,
      date: "2024-02-15",
    },
    {
      id: 8,
      title: "Meeting with client",
      description: "Discuss project requirements and deliverables",
      checked: false,
      date: "2023-11-20",
    },
    {
      id: 9,
      title: "Family dinner",
      description: "Gather with family members for a dinner party",
      checked: false,
      date: "2022-09-05",
    },
    {
      id: 10,
      title: "Attend webinar on AI",
      description:
        "Learn about the latest advancements in artificial intelligence",
      checked: false,
      date: "2024-07-15",
    },
    {
      id: 11,
      title: "Visit dentist",
      description: "Routine dental check-up at 10 AM",
      checked: false,
      date: "2023-04-30",
    },
  ]);
  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  // when the component mounts, set the time to 15 minutes
  useEffect(() => {
    // timeout
    if (isMounted) {
      setTime(0);
    }
  }, [isMounted]);

  useEffect(() => {
    if (timerData && timerData !== "00:05:00") {
      // Check if selector has been used
      const [hours, minutes, seconds] = timerData.split(":").map(Number);
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;
      setTime(totalSeconds);
    }
  }, [timerData]);
  return (
    <div className="justify-center items-center w-full h-full">
      <SessionProvider session={session}></SessionProvider>
      <div className="flex flex-col md:flex-row justify-center items-center text-white h-full md:h-1/2 w-full py-10 px-12">
        <Timer
          time={time}
          type="classic"
          mood="angry"
          className=" bg-red-400"
          setIsRunning={setIsRunning}
        />

        <div className="w-2/3 md:h-1/3 h-full flex flex-col justify-start md:justify-center items-center gap-8 px-6 py-4 ">
          <TimeSet setTimerData={setTimerData} />
          <div className="flex flex-col gap-2 w-full items-center">
            <button
              onClick={() => {
                setTime(900);
              }}
              className="w-2/3 text-sm h-8 bg-util bg-opacity-10 border-util rounded-lg py-1"
            >
              00:15:00
            </button>
            <button
              onClick={() => {
                setTime(1800);
              }}
              className="w-2/3 text-sm h-8 bg-util bg-opacity-10 border-util rounded-lg py-1"
            >
              00:30:00
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 hidden md:flex text-text px-4 py-4 justify-center w-full items-center flex">
        <div className="w-1/2 h-full ">
          {" "}
          <div className="flex-col flex min-h-96">
            <div className="text-text text-lg w-full font-semibold justify-center items-center flex flex-col px-2 py-4">
              Today
            </div>
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
        </div>
        <div className="w-1/2 h-full bg-green-600"></div>
      </div>
      {/* <div className="text-text px-4 py-4 justify-center w-full items-center flex gap-10 min-h-96 pt-20">
   
        <div className="flex-col flex min-h-96">
          <div className="text-text text-lg w-full justify-center items-center flex flex-col">
            Past
          </div>
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
   
        <div className="flex-col flex min-h-96">
          <div className="text-text text-lg w-full font-semibold justify-center items-center flex flex-col">
            Today
          </div>
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
       
        <div className="flex flex-col  min-h-96">
          <div className="text-text text-lg w-full font-semibold justify-center items-center flex">
            Future
          </div>
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
      
      </div> */}
    </div>
  );
};

export default page;
