"use client";
import { useState, useEffect } from "react";

import { Checkbox } from "./ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Select } from "./ui/select";
import { Button } from "./ui/button";
import { deleteTask, updateUserTask } from "@/db/user";

const TaskCard = ({
  title,
  id,
  checked,
  description,
  due_date,
  tags,
  setTaskData,
  getTasks,
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  useEffect(() => {
    setIsChecked(checked);
    handleCheckChange(checked);
  }, [checked]);
  const updateTask = (id, checked) => {
    setTaskData((prev) => {
      return prev.map((task) => {
        if (task.$id === id) {
          return { ...task, status: checked };
        }
        return task;
      });
    });
  };
  const handleCheckChange = (checked) => {
    setIsChecked(checked);
    updateTask(id, checked);
  };

  const convertDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    // Pad month and day with 0 if they are less than 10
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    return `${day}-${month}-${year}`;
  };

  const tagOptions = ["Personal", "Work", "Shopping", "Others"];
  const [localTitle, setLocalTitle] = useState(title);
  const [localDescription, setLocalDescription] = useState(description);
  const [localDate, setLocalDate] = useState(convertDate(due_date));

  const [localTags, setLocalTags] = useState();
  const [taskid, setTaskid] = useState(id);

  useEffect(() => {
    setTaskid(id);
  }, [id]);


  const updateTaskDB = async () => {
    await updateUserTask({
      task_name: localTitle,
      content: localDescription,
      due_date: convertDate(localDate),
      tags: localTags,
      status: isChecked,
    }, taskid);
    getTasks();
    console.log("Task updated successfully");
  };

  const deleteTaskDB = async () => {
    await deleteTask(taskid);
    getTasks();
    console.log("Task deleted successfully");
  };

  return (
    <div className="min-w-48 w-full text-wrap px-2 py-2 bg-white bg-opacity-10 rounded-md flex">
      <Dialog>
        <div className="aspect-square flex justify-center items-start py-1">
          <Checkbox
            className=""
            checked={isChecked}
            onCheckedChange={handleCheckChange}
          />
        </div>
        <DialogTrigger className="w-full flex text-text">
          <span
            className={`text-white h-full flex justify-center items-center px-2 ${
              isChecked ? "line-through" : ""
            }`}
          >
            {title}
          </span>
        </DialogTrigger>
        <DialogContent className="text-text">
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
              value={localTitle}
              onChange={(e) => setLocalTitle(e.target.value)}
              className="bg-opacity-10 text-text text-opacity-50 w-full px-2 py-1 mt-2 border border-util border-[1px] border-opacity-20  rounded"
            />
            <Input
              className="bg-opacity-10 text-text text-opacity-50 w-full px-2 py-1 mt-2 border border-util border-[1px] border-opacity-20  rounded"
              type="text"
              placeholder="Description"
              value={localDescription}
              onChange={(e) => setLocalDescription(e.target.value)}
            />
            <Input
              className="bg-opacity-10 text-text text-opacity-50 w-full px-2 py-1 mt-2 border border-util border-[1px] border-opacity-20 rounded"
              type="date"
              value={localDate}
              onChange={(e) => setLocalDate(e.target.value)} // convert date to iso string
            />
            <select
              value={localTags}
              className="w-full bg-opacity-10 text-text text-opacity-50 w-full px-2 py-2 mt-2 border border-util border-[1px] border-opacity-20 rounded bg-util"
              onChange={(e) => setLocalTags(e.target.value)}
            >
              {tagOptions.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            <div className="flex w-full gap-4">
              {" "}
              <DialogTrigger
                onClick={updateTaskDB}
                disabled={localTitle === ""}
                className="w-1/2 px-2 py-2 mt-2 bg-accent bg-opacity-50 hover:bg-opacity-25 hover:bg-accent transition-all text-white rounded"
              >
                Save
              </DialogTrigger>
              <DialogTrigger
                onClick={deleteTaskDB}
                className="w-1/2 px-2 py-2 mt-2 bg-anger_primary bg-opacity-50 hover:bg-opacity-25 hover:bg-anger_primary transition-all text-white rounded"
              >
                Delete
              </DialogTrigger>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TaskCard;
