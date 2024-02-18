"use client";
import { useState, useEffect } from "react";

import { Checkbox } from "./ui/checkbox";

const TaskCard = ({ title, id, checked, setTaskData }) => {
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

  return (
    <div className="min-w-48 w-full text-wrap px-2 py-2 bg-white bg-opacity-10 rounded-md flex">
      <div className="aspect-square flex justify-center items-start py-1">
        <Checkbox
          className=""
          checked={isChecked}
          onCheckedChange={handleCheckChange}
        />
      </div>

      <span
        className={`text-white h-full flex justify-center items-center px-2 ${
          isChecked ? "line-through" : ""
        }`}
      >
        {title}
      </span>
    </div>
  );
};

export default TaskCard;
