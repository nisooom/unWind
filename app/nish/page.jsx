"use client";
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { getUserByEmail } from '@/db/user';
import { saveTask } from '@/db/task';

function TaskForm() {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date().toISOString().split("T")[0]);
  const [tags, setTags] = useState('Personal');

  const tagOptions = ['Personal', 'Work', 'Shopping', 'Others'];

  const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
      return () => {
      setIsMounted(false);
      };
    }, []);

    const [email, setEmail] = useState("");
    const [uuid, setUuid] = useState("");
    const { data: session } = useSession();

    useEffect(() => {
      if (session) {
        setEmail(session.user.email);
        // console.log("Email", email);
        fetchData(email);
      }
    }, [session, isMounted]);


  async function fetchData(email){
    const user = await getUserByEmail(email);
    // console.log("User", user);
    setUuid(user?.$id);

  }
  useEffect(() => {
    // console.log(`Task Name updated: ${taskName}`);
  }, [taskName]);

  useEffect(() => {
    // console.log(`Description updated: ${description}`);
  }, [description]);

  useEffect(() => {
    // console.log(`Due Date updated: ${dueDate}`);
  }, [dueDate]);

  useEffect(() => {
    // console.log(`Tags updated: ${tags}`);
  }, [tags]);



  async function addTask() {
    if (taskName === '') {
      console.log("Task Name is required");
      return;
    }
    await saveTask(uuid, description, taskName, false, tags, dueDate);
    console.log("Task saved successfully");
    setTaskName('');
    setDescription('');
    setDueDate(new Date().toISOString().split("T")[0]);
    setTags('Personal');

  }

  return (
    <div>
      <div className="text-white">
        <h1>Add a new task</h1>
        <div className="text-black">
          <input type="text" placeholder="Task Name" value={taskName} onChange={e => setTaskName(e.target.value)} />
          <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
          <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
          <select value={tags} onChange={e => setTags(e.target.value)}>
            {tagOptions.map(tag => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        <button onClick={addTask} disabled={taskName != ''}>Save</button>
      </div>
    </div>
  );
}

export default TaskForm;