"use client";
import { saveUser } from "@/db/save-user";
import { useSession, signIn, signOut } from "next-auth/react";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Button } from "./ui/button";

export default function LoginButton() {
  const { data: session, status } = useSession();

  const handleSignIn = async (providerId) => {
    const result = await signIn(providerId, { callbackUrl: "/" });

    if (result?.ok && status === "authenticated") {
      const session = await getSession();
      saveUser(session.user.id, session.user, session.user.image);
    }
  };

  if (session) {
    return (
      <>
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
      {Object.values(options.providers).map((provider) => (
        <div key={provider.id}>
          <Button
            className="mt-2 hover:bg-util hover:bg-opacity-10 border-util border-[1px] border-opacity-30 text-white font-bold py-2 px-4 rounded transition-all w-full"
            onClick={() => handleSignIn(provider.id)}
          >
            Sign in
          </Button>
        </div>
      ))}
    </>
  );
}
