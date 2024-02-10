"use client"

// import React from 'react'
// import useState from 'react'
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// export function pickDate(){
//   const [date, setDate] = useState(new Date())
//   return (
//     <Popover>
//     <PopoverTrigger asChild>
//         <Button
//           variant={"outline"}
//           className={cn(
//             "w-[240px] justify-start text-left font-normal",
//             !date && "text-muted-foreground"
//           )}
//         >
//           <CalendarIcon className="mr-2 h-4 w-4" />
//           {date ? format(date, "PPP") : <span>Pick a date</span>}
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-auto p-0" align="start">
//         <Calendar
//           mode="single"
//           selected={date}
//           onSelect={setDate}
//           initialFocus
//         />
//       </PopoverContent>
//     </Popover>
//   )
// }

import React, { useState } from "react";
import DatePicker from "react-datepicker";


function page() {
  const [date, setDate] = useState(new Date());
  return (

    // Task description
    <div className="w-72 h-52 bg-white bg-opacity-5 rounded-xl">
      <div className="w-full h-8 border-util border-b-[1px] border-opacity-20 text-white pl-8 py-1">Title of Task</div>
      <div className="pt-2 pl-6 text-slate-400">Details of the task go here</div>
      <div className="flex pt-10 pl-6  text-slate-400 gap-4">
        <button className="border-util border-2 px-4">Calendar
        </button>
        <div>
      <DatePicker selected={date} onChange={(date) => setDate(date) } className="text-white border-util border-2"/>
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