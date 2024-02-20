"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { getUserByEmail } from "@/db/user";
import { saveTask } from "@/db/task";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TaskCreate = ({ getTasks }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [tags, setTags] = useState("Personal");

  const tagOptions = ["Personal", "Work", "Shopping", "Others"];
  const [open, setOpen] = useState(false);
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
      fetchData(email);
    }
  }, [session, isMounted]);

  async function fetchData(email) {

    const user = await getUserByEmail(email);
    console.log("User", user);
    setUuid(user?.$id);
  
  }

  async function addTask() {
    if (taskName === "") {
      console.log("Task Name is required");
      return;
    }
    await saveTask(uuid, description, taskName, false, tags, dueDate);
    console.log("Task saved successfully");
    getTasks();
    setOpen(false);
    setTaskName("");
    setDescription("");
    setDueDate(new Date().toISOString().split("T")[0]);
    setTags("Personal");
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
      }}
      className="w-full bg-gray-200 rounded-lg text-text"
    >
      <DialogTrigger className="text-white rounded w-full flex">
        <div className="rounded-md py-2 w-full bg-background border border-util border-opacity-20 border-[1px] transition-all">
          Create New
        </div>
      </DialogTrigger>
      <DialogContent className="p-4">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold  text-text">
            Add a new task
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Fill in the details of the task you want to create.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <Input
            type="text"
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="bg-opacity-10 text-text text-opacity-50 w-full px-2 py-1 mt-2 border border-util border-[1px] border-opacity-20  rounded"
          />
          <Input
            className="bg-opacity-10 text-text text-opacity-50 w-full px-2 py-1 mt-2 border border-util border-[1px] border-opacity-20  rounded"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            className="bg-opacity-10 text-text text-opacity-50 w-full px-2 py-1 mt-2 border border-util border-[1px] border-opacity-20 rounded"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <select
            value={tags}
            className="w-full bg-opacity-10 text-text text-opacity-50 w-full px-2 py-2 mt-2 border border-util border-[1px] border-opacity-20 rounded bg-util"
            onChange={(e) => setTags(e.target.value)}
          >
            {tagOptions.map((tag) => (
              <option className="bg-opacity-10 text-black text-opacity-50" key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <Button
            onClick={addTask}
            disabled={taskName === ""}
            className="w-full px-2 py-1 mt-2 bg-accent bg-opacity-50 hover:bg-opacity-25 hover:bg-accent transition-all text-white rounded"
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskCreate;
