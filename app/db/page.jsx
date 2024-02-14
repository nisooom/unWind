"use client";
import { useState, useEffect } from "react";
import { getUserByEmail } from "@/db/user";
import { saveTask } from "@/db/task";
import { useSession } from "next-auth/react";



const page = () => {

  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      setEmail(session.user.email);
      console.log("Session", session);
    }
  }, [session]);


  const [email, setEmail] = useState("code.tejas@gmail.com");
  const [data, setData] = useState("");
  const [task, setTask] = useState({
    users: "user_id",
    content: "",
    task_name: "",
    status: true,
    tags: "",
    due_date: "",
  });

  const fetchData = async () => {
    const user = await getUserByEmail(email);
    setData(user);
  };
  const saveData = async () => {
    await saveTask(
      task.users,
      task.content,
      task.task_name,
      task.status,
      task.tags,
      task.due_date
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUserByEmail(email);
      setData(user);
    };
    fetchData();
  }, [email]);

  // useEffect when data is upoates to udpates users from task
  useEffect(() => {
    setTask({ ...task, users: data.$id });
  }, [data]);

  return (
    <div className="text-white">
      <h1>Page</h1>
      <p>Data = {JSON.stringify(data)}</p>
      {/* button to fetch data */}
      <button onClick={() => fetchData()}>Fetch Data</button>
      {/* button to save taks */}
      <button onClick={() => saveData()}>Save Task</button>
    </div>
  );
};

export default page;
