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

import Tick from "/components/logos/Tick.jsx";

function page() {
  const [date, setDate] = useState(new Date());
  return (

    // Task description
  //   <div className="w-96 h-52 bg-white bg-opacity-5 rounded-xl">
  //     <div className="w-full h-8 border-util border-b-[1px] border-opacity-20 text-white pl-8 py-1">Title of Task</div>
  //     <div className="pt-2 pl-6 text-slate-400">Details of the task go here</div>
  //     <div className="flex pt-10 pl-6  text-slate-400 gap-4">
  //       <div>Task Date:</div>
  //       <DatePicker selected={date} onChange={(date) => setDate(date) } className="w-28 justify-center items-center bg-white bg-opacity-20 text-center border-util border-1 rounded-xl h-6"/>  
  //       <button className="border-util px-4 border-2 rounded-xl">Delete</button>
  //     </div>

  //   <DropdownMenu>
  //     <DropdownMenuTrigger className=" pl-6 pt-4 text-slate-400 rounded-xl">Task Priority</DropdownMenuTrigger>
  //     <DropdownMenuContent>
  //       <DropdownMenuLabel className="text-slate-400 border-b-2 border-util">How important is your task?</DropdownMenuLabel>
  //       <DropdownMenuSeparator />
  //       <DropdownMenuItem className="text-slate-400">Urgent</DropdownMenuItem>
  //       <DropdownMenuItem className="text-slate-400">Above Average Importance</DropdownMenuItem>
  //       <DropdownMenuItem className="text-slate-400">Casual</DropdownMenuItem>
  //     </DropdownMenuContent>
  //   </DropdownMenu>

  // <DropdownMenu>
  //   <DropdownMenuTrigger className="pl-4 text-slate-400 rounded-xl">Task Domain</DropdownMenuTrigger>
  //   <DropdownMenuContent>
  //     <DropdownMenuLabel className="text-slate-400 border-b-2 border-util">What type of a task is it?</DropdownMenuLabel>
  //     <DropdownMenuSeparator />
  //     <DropdownMenuItem className="text-slate-400">Leisure</DropdownMenuItem>
  //     <DropdownMenuItem className="text-slate-400">Work</DropdownMenuItem>
  //     <DropdownMenuItem className="text-slate-400">Casual/Home</DropdownMenuItem>
  //     <DropdownMenuItem className="text-slate-400">Hobby</DropdownMenuItem>
  //     <DropdownMenuItem className="text-slate-400">Reminder</DropdownMenuItem>
  //   </DropdownMenuContent>
  // </DropdownMenu>
  // </div>

  <div className="flex flex-col text-white rounded-xl w-11/12 h-full pl-16">

    <div className="w-full h-1/6 flex gap-36">
        <div className="flex pt-2">
          {/* <span className="h-full bg-blue-600"> // ICON IMPORTING
            <Tick />Tasks
          </span> */}

            <div className="w-1/3 h-full bg-blue-600 px-2">Tasks</div>
            <div className="w-1/3 h-full bg-green-500 bg-opacity-100 px-2">Streak</div>
            <div className="w-1/3 h-full bg-pink-600 bg-opacity-100 px-2">Mood</div>

        </div>

        <div className="flex gap-4 pb-2">
          <button className="bg-neutral-900 bg-opacity-50 border-util border rounded-md px-2"> &lt; </button>
            <div className="px-">February, 2024</div>
          <button className="bg-neutral-900 bg-opacity-50 border-util border rounded-md px-2"> &gt; </button>
        </div>
    </div>

    <div className="bg-neutral-900 bg-opacity-50 border-util border-t-2 border-l-2 border-r-2 h-1/4 flex pl-24 pt-2 gap-20">
        <div>Mon</div>
        <div>Tues</div>
        <div>Wed</div>
        <div>Thurs</div>
        <div className="pr-4">Fri</div>
        <div className="pr-2">Sat</div>
        <div>Sun</div>
    </div>

    <div className="bg-neutral-900 bg-opacity-50 border-util border-l-2 border-r-2 h-3/4 pl-16 pt-5 flex gap-5">
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
    </div> 

    <div className="bg-neutral-900 bg-opacity-50 border-util border-l-2 border-r-2 h-3/4 pl-16 pt-5 flex gap-5">
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
    </div> 

    <div className="bg-neutral-900 bg-opacity-50 border-util border-l-2 border-r-2 h-3/4 pl-16 pt-5 flex gap-5">
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
    </div> 

    <div className="bg-neutral-900 bg-opacity-50 border-util border-l-2 border-r-2 h-3/4 pl-16 pt-5 flex gap-5">
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
        <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4"></div>
    </div> 

    <div className="bg-neutral-900 bg-opacity-50 border border-util h-3/4"> wth comes here </div>
  </div>

  


  )
}

// if you want days and first row to be columns of divs

{/* <div className="flex border-util border-t-2 border-l-2 border-r-2">

<div className="bg-neutral-900 bg-opacity-50  flex-col pl-16">
  <div>Mon</div>
  <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4">1</div>
 </div>

<div className="bg-neutral-900 bg-opacity-50 flex-col pl-16">
  <div>Tues</div>
  <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4">2</div>
</div>

<div className="bg-neutral-900 bg-opacity-50  flex-col pl-16">
  <div>Wed</div>
  <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4">3</div>
</div>

<div className="bg-neutral-900 bg-opacity-50 flex-col pl-16">
  <div>Thurs</div>
  <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4">4</div>
</div>

<div className="bg-neutral-900 bg-opacity-50  flex-col pl-16">
  <div>Fri</div>
  <div className="bg-black border bg-opacity-40 border-util rounded-xl w-24 h-3/4">5</div>
</div>

</div> */}

export default page