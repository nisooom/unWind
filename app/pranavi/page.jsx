import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'

const page = () => {
  return (
    <div className="w-full h-full bg-black">
       <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 bg-white"
        >
          Complete Assignmnet
        </label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  
      

  </div>
  )
}

export default page