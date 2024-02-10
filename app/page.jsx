"use client";
import { Checkbox } from "@/components/ui/checkbox";
import LoginButton from "@/components/login-btn";
import { SessionProvider } from "next-auth/react";
const page = ({ session }) => {
  return (
    <div>
      <SessionProvider session={session}>
        {/* <LoginButton /> */}
        <div className="w-48 h-10 bg-white bg-opacity-10 rounded-md flex">
          <div className="aspect-square h-10 flex justify-center items-center">
            <Checkbox className="" />
          </div>
          <span className="text-white h-full flex justify-center items-center px-2">
            etxt goes ehere
          </span>
        </div>
      </SessionProvider>
    </div>
  );
};

export default page;
