"use client";
import React, { useState } from "react";
import TaskCard from "@/components/TaskCard";
import { AnimatePresence, motion } from "framer-motion";

const Page = () => {
  const [taskData, setTaskData] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "This is a description",
      checked: false,
      date: "2024-02-15",
    },
    {
      id: 2,
      title: "Task 2",
      description: "This is a description",
      checked: false,
      date: "2024-02-10",
    },
    {
      id: 3,
      title: "Task 3",
      description: "This is a description",
      checked: false,
      date: "2024-02-10",
    },
    {
      id: 4,
      title: "Task 4",
      description: "This is a description",
      checked: false,
      date: "2024-01-10",
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
    <div className="text-text px-4 py-4">
      {/* past task */}
      <div className="text-text text-lg font-semibold">Past</div>
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

      {JSON.stringify(taskData)}
    </div>
  );
};

export default Page;
