"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import Profile from "./logos/Profile";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useSession } from "next-auth/react";

const ProfileDialog = ({ show = true, color, mood }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      setName(session.user.name);
      setEmail(session.user.email);
    }
  }, [isMounted, session]);



  const saveProfile = () => {
    console.log("saveProfile");
    console.log("name", name);
    console.log("email", email);
    // here save the user data
  };

  return (
    <Dialog className="text-text">
      <DialogTrigger
        className={`round-fill-${mood} transition-all duration-300 ease-in-out text-text w-full bg-transparent px-2 py-2 rounded-md ${color} hover:bg-opacity-10 flex items-center justify-center sm:justify-start sm:items-start`}
      >
        <span className="flex gap-2 items-center text-text text-lg hover:fill-red-500">
          <Profile className="" />
          {show && "Profile"}
        </span>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-text">Profile</DialogTitle>
        </DialogHeader>
        <div className="">
          <div className="text-text">
            <span>Name: </span>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="text-text">
            <span>Email: </span>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
        </div>
        <Button
          className="mt-4 bg-white hover:bg-gray-100 text-black"
          onClick={() => {
            saveProfile();
          }}
        >
          Save
        </Button>

        {/*  */}
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;
