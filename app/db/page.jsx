"use client";
import { useState, useEffect } from "react";
import { getUserByEmail, getUserTasks } from "@/db/user";
import { saveTask } from "@/db/task";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";

const page = () => {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (session) {
      setUserEmail(session.user.email);
      // console.log("Session", session);
    }
  }, [session]);

  const [userEmail, setUserEmail] = useState(null);
  useEffect(() => {
    if (status === "authenticated") {
      setUserEmail(session.user.email);
    }
  }, [status]);
  const [data, setData] = useState("");
  const [task, setTask] = useState({
    users: "",
    content: "hdhdfh",
    task_name: "one",
    status: true,
    tags: "",
    due_date: "",
  });

  const fetchData = async () => {
    const user = await getUserByEmail(userEmail);
    console.log("User", user);
    setData(user);
  };
  useEffect(() => {
    if (status === "authenticated") {
      fetchData();
    }
  }, [userEmail]);
  useEffect(() => {
    setTask({ ...task, users: data.$id });
  }, [data]);

  const saveData = async () => {
    // log email
    console.log("Saving in ", userEmail);
    // log task
    console.log("Task", task);

    await saveTask(
      task.users,
      task.content,
      task.task_name,
      task.status,
      task.tags,
      task.due_date
    );
  };

  const [taskData, setTaskData] = useState([]);

  const getTasks = async () => {
    if (!userEmail) return;
    let res = await getUserTasks(userEmail);
    // console.log("Res", res);
    console.log(userEmail);
    setTaskData(res);
  };
  useEffect(() => {
    getTasks();
  }, [userEmail]);

  return (
    <div className="text-white">
      <h1>Page</h1>
      {/* <p>Data = {JSON.stringify(data, null, 4)}</p> */}
      {/* button to fetch data */}
      <button onClick={() => fetchData()}>Fetch Data</button>

      {/* button to save taks */}
      <button onClick={() => saveData()}>Save Task</button>

      {/* button to get tasks */}
      <button onClick={() => getTasks()}>Get Tasks</button>
      {/* format json */}
      {/* <pre>{JSON.stringify(task, null, 2)}</pre> */}
      <pre>{JSON.stringify(taskData, null, 2)}</pre>
    </div>
  );
};

export default page;
