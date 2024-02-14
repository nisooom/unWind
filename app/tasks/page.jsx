"use client";
import React, { useState } from "react";
import TaskCard from "@/components/TaskCard";
import { AnimatePresence, motion } from "framer-motion";

const Page = () => {
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
      title: "Continue Programming course",
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

    {
      id: 5,
      title: "Attend John's birthday party",
      description: "Bring a gift and join the celebration at 7 PM",
      checked: false,
      date: "2024-02-29",
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
    <div className="text-text px-4 py-10">
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

      {/* {JSON.stringify(taskData)} */}
    </div>
  );
};

export default Page;
