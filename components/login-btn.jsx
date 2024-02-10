"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Button } from "./ui/button";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {/* <p className="text-sm font-semibold">
          Signed in as {session.user.email}
        </p> */}
        <Button
          className="mt-2 hover:bg-red-400 hover:bg-opacity-10 border-util hover:border-red-400 hover:border-opacity-40 border-[1px] border-opacity-30 text-white font-bold py-2 px-4 rounded transition-all w-full"
          onClick={() => signOut()}
        >
          Sign out
        </Button>
      </>
    );
  }

  return (
    <>
      {/* <p className="text-sm font-semibold">Not signed in</p> */}
      {Object.values(options.providers).map((provider) => (
        <div key={provider.id}>
          <Button
            className="mt-2 hover:bg-util hover:bg-opacity-10 border-util border-[1px] border-opacity-30 text-white font-bold py-2 px-4 rounded transition-all w-full"
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: "/",
              })
            }
          >
            Sign in
          </Button>
        </div>
      ))}
    </>
  );
}
