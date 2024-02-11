"use client"

// Date Picker Imports
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Dropdown Menu imports
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function page() {
  const [date, setDate] = useState(new Date());
  return (

    // Task description
    <div className="w-96 h-52 bg-white bg-opacity-5 rounded-xl">
      <div className="w-full h-8 border-util border-b-[1px] border-opacity-20 text-white pl-8 py-1">Title of Task</div>
      <div className="pt-2 pl-6 text-slate-400">Details of the task go here</div>
      <div className="flex pt-10 pl-6  text-slate-400 gap-4">
        <div>Task Date:</div>
        <DatePicker selected={date} onChange={(date) => setDate(date) } className="w-28 justify-center items-center bg-white bg-opacity-20 text-center border-util border-1 rounded-xl h-6"/>  
        <button className="border-util px-4 border-2 rounded-xl">Delete</button>
      </div>

    <DropdownMenu>
      <DropdownMenuTrigger className="text-slate-400 border-util border-2 rounded-xl">Task Priority</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-slate-400 border-b-2 border-util">How important is your task?</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-slate-400">Urgent</DropdownMenuItem>
        <DropdownMenuItem className="text-slate-400">Above Average Importance</DropdownMenuItem>
        <DropdownMenuItem className="text-slate-400">Casual</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  <DropdownMenu>
    <DropdownMenuTrigger className="text-slate-400 border-util border-2 rounded-xl">Task Domain</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel className="text-slate-400 border-b-2 border-util">What type of a task is it?</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="text-slate-400">Leisure</DropdownMenuItem>
      <DropdownMenuItem className="text-slate-400">Work</DropdownMenuItem>
      <DropdownMenuItem className="text-slate-400">Casual/Home</DropdownMenuItem>
      <DropdownMenuItem className="text-slate-400">Hobby</DropdownMenuItem>
      <DropdownMenuItem className="text-slate-400">Reminder</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>

    </div>
  )
}

export default page