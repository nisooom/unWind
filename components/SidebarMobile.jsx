"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tick from "./logos/Tick";
import Calendar from "./logos/Calendar";
import Store from "./logos/Store";
import ProfileDialog from "./ProfileDialog";
import { SessionProvider } from "next-auth/react";
import LoginButton from "@/components/login-btn";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SidebarMobile = ({ session }) => {
  return (
    <SessionProvider session={session}>
      <div className="block sm:hidden text-white z-10 absolute w-full h-20 bg-background px-4 py-4 border-util border-opacity-20 border-r-[2px] bottom-0 flex items-center justify-center ">
        <div className="w-24 h-24 bg-black bg-opacity-80 mb-16 rounded-full flex justify-center items-center">
          <Link
            href="/"
            className="p-4 rounded-full bg-transparent hover:bg-util hover:bg-opacity-10 hover:border-opacity-10 hover:border-background transition-all duration-300 ease-in-out"
          >
            <Image src="/logos/icon.png" alt="logo" width={60} height={60} />
          </Link>
        </div>
        <div className="absolute w-2/5 h-20 right-0 flex">
          <div className="w-1/2 h-full flex items-center justify-center">
            <Link
              href="/tasks"
              className="p-4 rounded-full bg-transparent  hover:bg-util hover:bg-opacity-10 transition-all duration-300 ease-in-out"
            >
              <Tick className="" />
            </Link>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center ">
            <Link
              href="/store"
              className="p-4 rounded-full bg-transparent  hover:bg-util hover:bg-opacity-10 transition-all duration-300 ease-in-out"
            >
              <Store className="" />
            </Link>
          </div>
        </div>
        {/* for left */}
        <div className="absolute w-2/5 h-20 left-0 flex px-4">
          <div className="w-1/2 h-full flex items-center justify-center">
            {/* sign out */}
            <LoginButton />
          </div>
          <div className="w-1/2 h-full flex items-center justify-center px-4">
            <ProfileDialog show={false} />
          </div>
        </div>
      </div>
    </SessionProvider>
  );
};

export default SidebarMobile;
