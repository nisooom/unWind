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
    <div className="w-1/3 h-10 bg-white bg-opacity-10 rounded-md flex">
      <div className="aspect-square h-10 flex justify-center items-center">
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
