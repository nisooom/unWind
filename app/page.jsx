"use client";
import LoginButton from "@/components/login-btn";
import { SessionProvider } from "next-auth/react";
const page = ({ session }) => {
  return (
    <div>
      <SessionProvider session={session}>
        <LoginButton />
      </SessionProvider>
    </div>
  );
};

export default page;
