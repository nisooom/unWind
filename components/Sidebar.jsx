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

const Sidebar = ({ session }) => {
  return (
    <SessionProvider session={session}>
      <div className="sm:block hidden text-white z-10 absolute w-56 h-full bg-background px-4 py-4 border-util border-opacity-20 border-r-[2px]">
        <Link
          className="home font-semibold flex gap-2 items-center text-xl text-text"
          href="/"
        >
          <Image src="/logos/icon.png" alt="logo" width={50} height={50} />
          UnWind
        </Link>
        {/* list of all links with logos */}
        <div className="flex flex-col gap-3 mt-8">
          <Link
            href="/tasks"
            className="round w-full bg-transparent px-2 py-2 rounded-lg hover:bg-util hover:bg-opacity-10 transition-all duration-300 ease-in-out"
          >
            <span className="flex gap-2 items-center text-text text-lg hover:fill-red-500">
              <Tick className="" />
              Task List
            </span>
          </Link>
          {/* <Link
          href="/calendar"
          className="round-fill w-full bg-transparent px-2 py-2 rounded-lg hover:bg-util hover:bg-opacity-10 transition-all duration-300 ease-in-out"
        >
          <span className="flex gap-2 items-center text-text text-lg hover:fill-red-500">
            <Calendar className="" />
            Calendar
          </span>
        </Link> */}
          <Link
            href="/store"
            className="round w-full bg-transparent px-2 py-2 rounded-lg hover:bg-util hover:bg-opacity-10 transition-all duration-300 ease-in-out"
          >
            <span className="flex gap-2 items-center text-text text-lg hover:fill-red-500">
              <Store className="" />
              Store
            </span>
          </Link>
          <ProfileDialog />
          {/* fix login button to bottom */}
          <LoginButton />
        </div>
      </div>
    </SessionProvider>
  );
};

export default Sidebar;
