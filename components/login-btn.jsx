"use client";
// import { saveUser } from "@/db/save-user";
import { useSession, signIn, signOut } from "next-auth/react";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Button } from "./ui/button";
import Exit from "./logos/Exit";
import Power from "./logos/Power";

export default function LoginButton() {
  const { data: session, status } = useSession();

  const handleSignIn = async (providerId) => {
    const result = await signIn(providerId, { callbackUrl: "/" });

    if (result?.ok && status === "authenticated") {
      const session = await getSession();
      // saveUser(session.user.id, session.user, session.user.image);
    }
  };

  if (session) {
    return (
      <>
        <Button
          className="hover:bg-red-400 hover:bg-opacity-10 border-util border-0 sm:border-[1px] hover:border-red-400 hover:border-opacity-40  border-opacity-30 text-white font-bold py-2 px-2 rounded transition-all w-20 text-xs sm:text-sm w-full gap-2"
          onClick={() => signOut()}
        >
          <Exit className="" />
          <span className="hidden sm:flex">Sign out</span>
        </Button>
      </>
    );
  }

  return (
    <>
      {Object.values(options.providers).map((provider) => (
        <div key={provider.id}>
          <Button
            className="hover:bg-util hover:bg-opacity-10  border-util border-0 sm:border-[1px] border-opacity-30 text-white font-bold rounded transition-all flex gap-2 w-full justify-center"
            onClick={() => handleSignIn(provider.id)}
          >
            <Power className="" />
            <span className="hidden sm:flex">Sign in</span>
          </Button>
        </div>
      ))}
    </>
  );
}
