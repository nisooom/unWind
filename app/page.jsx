"use client";
import { Checkbox } from "@/components/ui/checkbox";

import { SessionProvider } from "next-auth/react";
const page = ({ session }) => {
  return (
    <div>
      <SessionProvider session={session}></SessionProvider>
    </div>
  );
};

export default page;
