// TaskCard.jsx
import React from "react";
import { Checkbox } from "./ui/checkbox";

const TaskCard = ({ title, id, checked, setTaskData }) => {
  const handleCheckChange = (newChecked) => {
    console.log("newChecked", newChecked);
    console.log("id", id);
    setTaskData((prev) => {
      const newTaskData = prev.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            checked: newChecked,
          };
        }
        return task;
      });
      return newTaskData;
    });
  };

  return (
    <div className="min-w-48 w-full text-wrap px-2 py-2 bg-white bg-opacity-10 rounded-md flex">
      <div className="aspect-square flex justify-center items-start py-1">
        <Checkbox className="" onCheckedChange={handleCheckChange} />
      </div>

      <span
        className={`text-white h-full flex justify-center items-center px-2 ${
          checked ? "line-through" : ""
        }`}
      >
        {title}
      </span>
    </div>
  );
};

export default TaskCard;
