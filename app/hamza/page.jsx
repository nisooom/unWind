"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function page() {
  const [date, setDate] = useState(new Date());
  return (

    // Task description
    <div className="w-72 h-52 bg-white bg-opacity-5 rounded-xl">
      <div className="w-full h-8 border-util border-b-[1px] border-opacity-20 text-white pl-8 py-1">Title of Task</div>
      <div className="pt-2 pl-6 text-slate-400">Details of the task go here</div>
      <div className="flex pt-10 pl-6  text-slate-400 gap-4">
      <DatePicker selected={date} onChange={(date) => setDate(date) } className="w-28 justify-center items-center bg-white bg-opacity-20 text-center border-util border-1 rounded-xl h-6"/>  
      <div>
      </div>
        <div className="pl-5 border-util border-2 px-4">Delete</div>
      </div>

      <div className="flex text-slate-400 gap-3 pl-6 pt-5">
        <div  className="border-2 border-util px-2">Urgent</div>
        <div className="border-2 border-util px-2">Leisure</div>
      </div>
    </div>
  )
}

export default page