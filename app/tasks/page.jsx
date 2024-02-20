"use client";
import React, { useState, useEffect } from "react";
import TaskCard from "@/components/TaskCard";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { getUserTasks } from "@/db/user";
import TaskCreate from "@/components/TaskCreate";

const Page = () => {
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  const [email, setEmail] = useState("");
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setEmail(session.user.email);
      console.log("Email", email);
    }
  }, [session, isMounted]);

  const getTasks = async () => {
    setTaskData(await getUserTasks(email));
    console.log("Task Data", await getUserTasks(email));
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
  const futureTasks = taskData.filter(
    (task) => task.due_date?.split("T")[0] > today
  );
  const pastTasks = taskData.filter(
    (task) => task.due_date?.split("T")[0] < today
  );

  // Sort each category array
  const sortedTodaysTasks = [...todaysTasks].sort(
    (a, b) => a.status - b.status
  );
  const sortedFutureTasks = [...futureTasks].sort(
    (a, b) => a.status - b.status
  );
  const sortedPastTasks = [...pastTasks].sort((a, b) => a.status - b.status);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mr-24 px-4 py-4">
        <TaskCreate getTasks={getTasks} />
      </div>

      <div className="text-text px-4 py-2 flex w-full h-full gap-2 overflow-auto">
        {/* past task */}
        {/* {JSON.stringify(taskData, null, 2)} */}
        <div className="flex flex-col gap-3 w-1/3 h-full min-w-64">
          <div className="text-text text-lg font-semibold">Past</div>
          <AnimatePresence>
            {sortedPastTasks.length > 0 ? (
              sortedPastTasks.map((task) => (
                <motion.div
                  key={task.$id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <TaskCard 
                    getTasks={getTasks}
                    id={task.$id}
                    title={task.task_name}
                    description={task.content}
                    checked={task.status}
                    setTaskData={setTaskData}
                    due_date={task.due_date}
                    tags={task.tags}
                  />
                </motion.div>
              ))
            ) : (
              <div className="opacity-60 min-w-48 w-full text-wrap px-2 py-2 bg-white bg-opacity-10 rounded-md flex">
                <span className="text-white h-full flex justify-center items-center px-2">
                  No tasks
                </span>
              </div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex flex-col gap-3 w-1/3 h-full min-w-64">
          <div className="text-text text-lg font-semibold">Today</div>
          <AnimatePresence>
            {sortedTodaysTasks.length > 0 ? (
              sortedTodaysTasks.map((task) => (
                <motion.div
                  key={task.$id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <TaskCard
                    getTasks={getTasks}
                    id={task.$id}
                    title={task.task_name}
                    description={task.content}
                    checked={task.status}
                    setTaskData={setTaskData}
                  />
                </motion.div>
              ))
            ) : (
              <div className="opacity-60 min-w-48 w-full text-wrap px-2 py-2 bg-white bg-opacity-10 rounded-md flex">
                <span className="text-white h-full flex justify-center items-center px-2">
                  No tasks
                </span>
              </div>
            )}
          </AnimatePresence>
        </div>
        {/* future task */}
        <div className="flex flex-col gap-3 w-1/3 h-full min-w-64">
          <div className="text-text text-lg font-semibold">Future</div>
          <AnimatePresence>
            {sortedFutureTasks.length > 0 ? (
              sortedFutureTasks.map((task) => (
                <motion.div
                  key={task.$id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <TaskCard
                    getTasks={getTasks}
                    id={task.$id}
                    title={task.task_name}
                    description={task.content}
                    checked={task.status}
                    setTaskData={setTaskData}
                  />
                </motion.div>
              ))
            ) : (
              <div className=" opacity-60 min-w-48 w-full text-wrap px-2 py-2 bg-white bg-opacity-10 rounded-md flex">
                <span className=" text-white h-full flex justify-center items-center px-2">
                  No tasks
                </span>
              </div>
            )}
          </AnimatePresence>
        </div>
        {/* {JSON.stringify(taskData)} */}
      </div>
    </div>
  );
};

export default Page;
